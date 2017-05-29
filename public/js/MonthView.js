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
Date.prototype.getLastDAyOfMonth = function(month) {
    if (month === undefined) {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    }
    return new Date(this.getFullYear(), month + 1, 0).getDate();
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
//***************************************************** 

// the scroll is working fine, but i need to reposition all the row
// the css attribute "position" : "absolute" is positioning all the 
// elements on the first pixels of the .container

var objArr = [];

function nrOfRows() {
    //return Math.round(cHeight / (sep + cardHeight));
    return todayDate.getLastDAyOfMonth()
}



function render() {
    var genHtml = ""
    console.log(nrOfRows());
    for (var i = 0, max = nrOfRows(); i < max; i++) {
        var rowO = new RowModel();
        rowO.id = i;
        rowO.index = i;
        rowO.setText(formatDate(todayDate.addDays(rowO.index)));
        rowO.vPos = (cardHeight + sep) * i + cTop;
        genHtml += rowO.htmlString();
        objArr.push(rowO);

    }
    $('#myRows').append(genHtml);
};

var RowModel = function() {
    this.text = ""
    this.setText = function(value) {
        this.text = value;
        return "text " + this.text;
    };

    this.htmlString = function() {
        return `
<div id="${this.id}" class="day-card col-xs-9 col-sm-3 col-md-2 col-lg-2">
    <div class="well">
        <h5><span class="fa fa-calendar"></span> ${this.text} </h5>
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
};

function formatDate(dateVal) {
    var tempDate = new Date(dateVal);
    var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return `${tempDate.getDate()} ${monthArray[tempDate.getMonth()]} ${tempDate.getFullYear()}`;
}
render();
