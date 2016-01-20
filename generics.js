//generic type
function identity(arg) {
    return arg;
}
var myIdentity = identity;
//generic function
function test(name) {
    return name;
}
var a = test;
a("Shan");
a(1);
//generic class
var testClass = (function () {
    function testClass() {
    }
    testClass.prototype.printName = function () {
        return this.name;
    };
    return testClass;
})();
var b = new testClass();
b.name = "Shan";
console.log(b.name);
console.log(b.printName());
var c = new testClass();
c.name = 2;
console.log(c.name);
console.log(c.printName());
var x = b;
var y = c;
//generics in factory methods
function ab(c) {
    return new c();
}
