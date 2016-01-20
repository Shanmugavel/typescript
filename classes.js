var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Hello = (function () {
    //Only one constructor allowed per class
    function Hello(firstName, lastName) {
        this.lastName = lastName;
        this.fName = firstName;
    }
    Hello.prototype.printInstance = function () {
        return "Hello " + this.fName;
    };
    Hello.printStatic = function () {
        return "Hello " + name;
    };
    return Hello;
})();
var a = new Hello("Shan", "Moorthy");
//Instance variables
console.log(a.fName);
console.log(a.name);
console.log(a.lastName);
console.log(a.printInstance());
//Static variables
console.log(Hello.cnt);
console.log(Hello.printStatic());
var A = (function () {
    function A() {
    }
    return A;
})();
//Class can extend only one class
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
})(A);
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(B);
var x = { x: "x", y: "y", z: "z" };
var y = new B();
var z = { x: "x", y: "y", z: "z", intfA: "A" };
