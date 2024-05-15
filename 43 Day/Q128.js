"use strict";
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
Object.defineProperty(exports, "__esModule", { value: true });
const multiply = (...args) => args.reduce((a, b) => a * b, 1);
console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 3628800
