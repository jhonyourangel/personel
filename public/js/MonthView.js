// on hold for the moment
// no furture development 


// improve the date Object
Date.prototype.addDays = function(d) {
    return this.valueOf() + 864E5 * d;
};
Date.prototype.getMonthName = function() {
    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return monthArray[this.getMonth()];
}
Date.prototype.getLastDAyOfMonth = function(month) {
    if (month === undefined) {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    }
    return new Date(this.getFullYear(), month + 1, 0).getDate();
}

let sqares = 100;
let todayDate = new Date();
let thisMonthDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);
let container = document.getElementById('myRows');

//*****************************************************
//*************** scroll event
//***************************************************** 

// the scroll is working fine, but i need to reposition all the row
// the css attribute "position" : "absolute" is positioning all the 
// elements on the first pixels of the .container

let objArr = [];

function nrOfRows() {
    //return Math.round(cHeight / (sep + cardHeight));
    return thisMonthDate.getLastDAyOfMonth()
}



function render() {
    let genHtml = ""
    console.log(nrOfRows());
    for (let i = 0, max = nrOfRows(); i < max; i++) {
        let rowO = new RowModel();
        rowO.id = i;
        rowO.setText(formatDate(thisMonthDate.addDays(rowO.id)));

        genHtml += rowO.htmlString();
        objArr.push(rowO);
    }
    $('#myRows').append(genHtml);
    _BindObjArr();
};

let RowModel = function() {
    this.text = ""
    this.id = 0;
    this.timeStamp = {
        in_1: "01:00",
        out_1: "00:00",
        in_2: "00:00",
        out_2: "00:00"
    }
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
            <input id="${this.id}_1_in" type="time" class="form-control" value="00:00" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="fa fa-sign-out"></span></span>
            <input id="${this.id}_1_out" type="time" class="form-control" value="00:00" aria-describedby="basic-addon1">
        </div>
        <br>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="fa fa-sign-in"></span></span>
            <input id="${this.id}_2_in" type="time" class="form-control" value="00:00" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="fa fa-sign-out"></span></span>
            <input id="${this.id}_2_out" type="time" class="form-control" value="00:00" aria-describedby="basic-addon1">
        </div>
        <h6 id="${this.id}_wh">08:00</h6>
    </div>
</div>`;

    };
};

function formatDate(dateVal) {
    let tempDate = new Date(dateVal);
    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return `${tempDate.getDate()} ${monthArray[tempDate.getMonth()]} ${tempDate.getFullYear()}`;
}

function bindModelInput(obj, property, domElem) {
    Object.defineProperty(obj, property, {
        get: function() {
            return domElem.value;
        },
        set: function(newValue) {
            domElem.value = newValue;
        },
        configurable: true
    });
}

function _BindObjArr() {
    for (let row of objArr) {
        bindModelInput(row.timeStamp, 'in_1', document.getElementById(row.id + "_1_in"));
        bindModelInput(row.timeStamp, 'out_1', document.getElementById(row.id + "_1_out"));
        bindModelInput(row.timeStamp, 'in_2', document.getElementById(row.id + "_2_in"));
        bindModelInput(row.timeStamp, 'out_2', document.getElementById(row.id + "_2_out"));
    }
    $('input').change(function() {
        console.log(`the ${this.id} changed the value to ${this.value}`);
        let thisID = this.id.split('_')[0];

        let in1 = objArr[thisID].timeStamp.in_1;
        let out1 = objArr[thisID].timeStamp.out_1;
        let in2 = objArr[thisID].timeStamp.in_2;
        let out2 = objArr[thisID].timeStamp.out_2;

        var workedHours = calculateWorkedTime(convertToMS(in1), convertToMS(out1), convertToMS(in2), convertToMS(out2));
        let whMS = convertToStringTime(workedHours);

        $(`#${thisID}_wh`).text(whMS);
    });
}

function convertToMS(string) {
    let m = 1000 * 60;
    let h = m * 60;
    let timeArr = string.split(":");

    return (timeArr[0] * h) + (timeArr[1] * m)
}

function convertToStringTime(ms) {
    let x = ms / 1000
    let seconds = x % 60
    x /= 60
    let minutes = x % 60
    x /= 60
    let hours = x % 24
    return `${Math.floor(hours)}:${Math.round(minutes)}`;
}

function calculateWorkedTime(in_1, out_1, in_2, out_2) {
    return (out_2 - in_2) + (out_1 - in_1);
}

render();
