var ShanCommons;
(function (ShanCommons) {
    var Validator = (function () {
        function Validator() {
            this.lettersRegExp = /^[A-Za-z]+$/;
        }
        Validator.prototype.isAlphabet = function (input) {
            return this.lettersRegExp.test(input);
        };
        return Validator;
    })();
    ShanCommons.Validator = Validator;
})(ShanCommons || (ShanCommons = {}));
var a = new ShanCommons.Validator();
console.log(a.isAlphabet("abDFG"));
