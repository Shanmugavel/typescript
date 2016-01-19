//Named functions
function add( a : number, b : number ) : number {
  return a + b;
}

//Anonymous functions
var fn  = function( a : number, b : number ) : number {
  return a + b;
};

//Function types
var f : (x: number, y : number) => number = function(a : number, b : number) {return a * b};

//Optional Parameters
function sum( a : number, b : number, c ?: number ) : number {
  var res : number = 0;
  res = a + b;
  if(c) {
    res += c;
  }
  return res;
}

alert(sum(1,2));
alert(sum(1,2,3));

//Default values for parameters
function mul(a : number, b : number, c = 5) : number {
  var res : number = 0;
  res = a * b;
  if(c) {
    res *= c;
  }
  return res;
}

alert(mul(1,2));
alert(mul(1,2,3));

//Rest parameters
function concat( a : string, ...restAllParams : string[]) : string {
  return a +" "+ restAllParams.join(" ");
}
alert(concat("a"));
alert(concat("a","b"));
alert(concat("a","b","c"));

//Overloads
function a( a : number) : number;
function a( a : string) : string;
function a(a : any) : any {
  if (typeof a == "string") {
    return "XYZ";
  } else if (typeof a == "number") {
    return 0;
  }
}
alert(a(3));
alert(a("A"));
