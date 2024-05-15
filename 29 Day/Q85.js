"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
Object.defineProperty(exports, "__esModule", { value: true });
function findCode(str) {
    return str.indexOf("code");
}
console.log(findCode("codecodecode")); // 0
