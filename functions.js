//Named functions
function add(a, b) {
    return a + b;
}
//Anonymous functions
var fn = function (a, b) {
    return a + b;
};
//Function types
var f = function (a, b) { return a * b; };
//Optional Parameters
function sum(a, b, c) {
    var res = 0;
    res = a + b;
    if (c) {
        res += c;
    }
    return res;
}
alert(sum(1, 2));
alert(sum(1, 2, 3));
//Default values for parameters
function mul(a, b, c) {
    if (c === void 0) { c = 5; }
    var res = 0;
    res = a * b;
    if (c) {
        res *= c;
    }
    return res;
}
alert(mul(1, 2));
alert(mul(1, 2, 3));
//Rest parameters
function concat(a) {
    var restAllParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restAllParams[_i - 1] = arguments[_i];
    }
    return a + " " + restAllParams.join(" ");
}
alert(concat("a"));
alert(concat("a", "b"));
alert(concat("a", "b", "c"));
function a(a) {
    if (typeof a == "string") {
        return "XYZ";
    }
    else if (typeof a == "number") {
        return 0;
    }
}
alert(a(3));
alert(a("A"));
