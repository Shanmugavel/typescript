module ShanCommons {
  export class Validator {
    lettersRegExp = /^[A-Za-z]+$/;
    isAlphabet( input : string) : boolean {
      return this.lettersRegExp.test(input);
    }
  }
}

var a : ShanCommons.Validator = new ShanCommons.Validator();
console.log(a.isAlphabet("abDFG"));
