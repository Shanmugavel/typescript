class Hello {
  fName : string;
  private pvt : string;
  static cnt : number;
  public name : string;

  //Only one constructor allowed per class
  constructor(firstName : string, public lastName : string) {
	  this.fName = firstName;
  }

   printInstance() : string {
    return "Hello " + this.fName;
  }

   static printStatic() : string {
    return "Hello " + name;
  }
}

var a : Hello = new Hello("Shan", "Moorthy");

//Instance variables
console.log(a.fName);
console.log(a.name);
console.log(a.lastName);
console.log(a.printInstance());

//Static variables
console.log(Hello.cnt);
console.log(Hello.printStatic());



class A {
  x : string;
}

//Class can extend only one class
class B extends A {
  y: string;
}

class C extends B {
  z : string;
}

var x : C = { x: "x", y : "y", z : "z" };
var y : B = new B();

//Class as an Interface
interface IntfA  extends C {
  intfA : string;

}

var z : IntfA = { x: "x",  y : "y", z : "z" , intfA : "A"};
