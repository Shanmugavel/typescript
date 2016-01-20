/// <reference path="Validator.ts" />
/// <reference path="StringValidator.ts" />
/// <reference path="NumberValidator.ts" />


var strValidator : ShanCommons.StringValidator = new ShanCommons.StringValidator();
console.log(strValidator.isAcceptable("abc"));

var noValidator : ShanCommons.NumberValidator = new ShanCommons.StringValidator();
console.log(noValidator.isAcceptable("1234"));


var validator : ShanCommons.NumberValidator = new ShanCommons.StringValidator();
console.log(validator.isAcceptable("1234"));
console.log(validator.isAcceptable("abc"));
