/// <reference path="Validator.ts" />
module ShanCommons {

  var lettersRegExp = /^[A-Za-z]+$/;
  export class StringValidator implements Validator {
    isAcceptable( input:string ) {
      return lettersRegExp.test(input);
    }
  }
}
