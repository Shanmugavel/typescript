/// <reference path="Validator.ts" />
module ShanCommons {

  var lettersRegExp = /^[0-9]+$/;
  export class NumberValidator implements Validator {
    isAcceptable( input:string ) {
      return lettersRegExp.test(input);
    }
  }
}
