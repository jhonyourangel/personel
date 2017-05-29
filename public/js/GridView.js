// on hold for the moment
// no furture development 


// improve the date Object
Date.prototype.addDays = function(d) {
    return this.valueOf() + 864E5 * d;
};
Date.prototype.getMonthName = function() {
    var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return monthArray[this.getMonth()];
}
var sqares = 100;
var todayDate = new Date();
var container = document.getElementById('myRows');


var cRect = container.getBoundingClientRect();
var cWidth = 500;
var cHeight = 500;
var cardHeight = 255;
var cardWidth = 200;
var sep = 10;
var cTop = cRect.top;
var topPos = (cHeight + (cardHeight * 2)) - cTop;
var bottomPos = (cHeight + (cardHeight * 2)) - cTop;

//*****************************************************
//*************** scroll event
//***************

// the scroll is working fine, but i need to reposition all the row
// the css attribute "position" : "absolute" is positioning all the 
// elements on the first pixels of the .container

container.addEventListener('wheel', weelEvent);

function weelEvent(e) {
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-40, Math.min(40, (e.wheelDelta || -e.detail)));
    moveRows(-delta);
}


var objArr = [];

function nrOfRows() {
    return Math.round(cHeight / (sep + cardHeight));
}

function moveRows(delta) {
    var rowToReuse;
    for (var i = 0; i < objArr.length; i++) {
        objArr[i].setVPos(delta);
        $(`#${objArr[i].id}`).css({
            top: `-=${delta}px`
        });

        if (objArr[i].vPos > cHeight + cTop) {
            //console.log(`${objArr[i].id} should move up`);
            objArr[i].moveUp();
        }

        if (objArr[i].vPos < cTop) {
            //console.log(`${objArr[i].id} should move up`);
            objArr[i].moveDown();
        }
    }
}

function render() {
    var genHtml = ""
    console.log(nrOfRows());
    for (var i = 0, max = nrOfRows(); i < max; i++) {
        for (var j = 0; j < 6; j++) {
            var rowO = new RowModel();
            rowO.id = i;
            rowO.index = i;
            rowO.setText(formatDate(todayDate.addDays(rowO.index)));
            rowO.vPos = (cardHeight + sep) * i + cTop;
            rowO.hPos = (cardWidth + sep) * i + cTop; // todo : fix this one

            genHtml += rowO.htmlString();
            objArr.push(rowO);
        }
    }
    $('#myRows').append(genHtml);
};

var RowModel = function() {
    this.vPos = 0.0;
    this.hPos = 0.0;
    this.id = 1;
    this.text = ""
    this.index = 0;
    this.setText = function(value) {
        this.text = value;
        return "text " + this.text;
    };

    this.htmlString = function() {
        return `
<div id="${this.id}" class="day-card" style="top:${this.vPos}px; width:200px;">
    <div class="well">
        <h4><span class="fa fa-calendar"></span> ${this.text} </h4>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="fa fa-sign-in"></span></span>
            <input type="number" class="form-control" placeholder="00/00" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="fa fa-sign-out"></span></span>
            <input type="number" class="form-control" placeholder="00/00" aria-describedby="basic-addon1">
        </div>
        <br>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="fa fa-sign-in"></span></span>
            <input type="number" class="form-control" placeholder="00/00" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="fa fa-sign-out"></span></span>
            <input type="number" class="form-control" placeholder="00/00" aria-describedby="basic-addon1">
        </div>
    </div>
</div>`;

    };

    this.setVPos = function(delta) {
        this.vPos += -delta;
    };
    this.setHPos = function(delta) {
        this.hPos += -delta;
    }

    this.moveUp = function() {
        this.index -= nrOfRows();
        this.DOM(todayDate.addDays(this.index));
        this.setVPos(560);
        $(`#${this.id}`).css({
            top: `-=${560}px`
        });
    };

    this.moveDown = function() {
        this.index += nrOfRows();
        this.DOM(todayDate.addDays(this.index));
        this.setVPos(-560);
        $(`#${this.id}`).css({
            top: `-=${-560}px`
        });
    };

    this.DOM = function(newDate) {
        var readableDate = formatDate(newDate);
        $(`#${this.id} > div.well > h4`).text(`${readableDate}`);
        this.setText(`${readableDate}`);
    };
};

function formatDate(dateVal) {
    var tempDate = new Date(dateVal);
    var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return `${tempDate.getDate()} ${monthArray[tempDate.getMonth()]} ${tempDate.getFullYear()}`;
}
//render();
