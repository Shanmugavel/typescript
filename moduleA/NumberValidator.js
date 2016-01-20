/// <reference path="Validator.ts" />
var ShanCommons;
(function (ShanCommons) {
    var lettersRegExp = /^[0-9]+$/;
    var NumberValidator = (function () {
        function NumberValidator() {
        }
        NumberValidator.prototype.isAcceptable = function (input) {
            return lettersRegExp.test(input);
        };
        return NumberValidator;
    })();
    ShanCommons.NumberValidator = NumberValidator;
})(ShanCommons || (ShanCommons = {}));
