"use strict";
// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return Number(num1) + Number(num2);
}
console.log(add(5, "5")); // Result 55
