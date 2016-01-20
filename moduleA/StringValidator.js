/// <reference path="Validator.ts" />
var ShanCommons;
(function (ShanCommons) {
    var lettersRegExp = /^[A-Za-z]+$/;
    var StringValidator = (function () {
        function StringValidator() {
        }
        StringValidator.prototype.isAcceptable = function (input) {
            return lettersRegExp.test(input);
        };
        return StringValidator;
    })();
    ShanCommons.StringValidator = StringValidator;
})(ShanCommons || (ShanCommons = {}));
