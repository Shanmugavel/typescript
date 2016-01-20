/// <reference path="Validator.ts" />
/// <reference path="StringValidator.ts" />
/// <reference path="NumberValidator.ts" />
var strValidator = new ShanCommons.StringValidator();
console.log(strValidator.isAcceptable("abc"));
var noValidator = new ShanCommons.StringValidator();
console.log(noValidator.isAcceptable("1234"));
var validator = new ShanCommons.StringValidator();
console.log(validator.isAcceptable("1234"));
console.log(validator.isAcceptable("abc"));
