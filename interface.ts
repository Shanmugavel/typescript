interface Person {
  firstName : string;
  lastName : string;
}

function greeter (person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var usr = { firstName : "Shanmugavel", lastName : "Sundaramoorthy"};

document.body.innerHTML = greeter(usr);


interface Animal {
  name : string;
  noOfLegs ?: number;
}

var a : Animal = { name: "Lion" };

interface Tail {
  tailColor : string;
  tailLength : number;
}

//Extend 2 interfaces
interface TailedAnimal extends Animal, Tail {
  pet : string;
}

var b  : TailedAnimal = { name : "Tiger", tailColor : "White", tailLength : 5, pet : "yes", noOfLegs : 4};

//function types
interface Addition {
  (a : number, b:number) : number;
}

var add : Addition;
add = function ( x: number, y : number) {
return x + y;
}

//Array types
interface StrArray {
  [index : number] : string;
  length : number;
}
var sa : StrArray = ["Abc", "Def"];
alert(sa[0]);

interface MyMap {
  [index : string] : string;
}
var dict : MyMap = {"a" : "ABC", "b" : "BCD" } ;
alert(dict["a"]);
