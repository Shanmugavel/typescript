//string
var name = "Shan";
//number
var empNo = 0001; //In JS all numbers are floating point numbers
//boolean
var active = true;
//Arrays
var elems = [1, 2, 3];
var names = ["Shan", "Srinivasan", "Rajkumar"];
//enum
var Status;
(function (Status) {
    Status[Status["ACTIVE"] = 0] = "ACTIVE";
    Status[Status["INACTIVE"] = 1] = "INACTIVE";
})(Status || (Status = {}));
;
var sta = Status.ACTIVE;
//Any
var tmp = "Shan";
tmp = 1;
tmp = true;
