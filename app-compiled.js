"use strict";

var myName = function myName() {
    var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anil";
    var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Kumar";

    console.log(firstName + ' ' + lastName);
};
myName();
