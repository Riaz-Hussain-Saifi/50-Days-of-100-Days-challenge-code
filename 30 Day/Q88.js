"use strict";
// Question 88: Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.
Object.defineProperty(exports, "__esModule", { value: true });
function stringToNumber(str) {
    return parseInt(str);
}
console.log(stringToNumber("123")); // 123
console.log(stringToNumber("123.456")); // 123.456
