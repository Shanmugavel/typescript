//generic type
function identity<T>(arg: T): T {
    return arg;
}

var myIdentity: <T>(arg: T)=>T = identity;

//generic function
function test<T>( name:T ) : T{
  return name;
}

var a : <T>( name:T ) => T = test;
a("Shan");
a(1);

//generic interface
interface testFn<T> {
  name : T;
  printName() : T;
}

//generic class
class testClass<T>  implements testFn<T>{
  name : T;
  printName() : T{
    return this.name;
  }
}

var b : testClass<string> = new testClass<string>();
b.name="Shan";
console.log(b.name);
console.log(b.printName());

var c : testClass<number> = new testClass<number>();
c.name=2;
console.log(c.name);
console.log(c.printName());

var x : testFn<string> = b;
var y : testFn<number> = c;


//generics in factory methods
function ab<T>(c : {new() : T}) : T {
return new c();
}
