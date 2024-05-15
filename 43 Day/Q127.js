"use strict";
// Question 127: Convert a traditional function expression to an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
// Traditional function expression
let traditionalFunction = function (x, y) {
    return x + y;
};
// Arrow function equivalent
let arrowFunction = (x, y) => x + y;
// Test the functions
console.log(traditionalFunction(2, 3)); // Output: 5
console.log(arrowFunction(2, 3)); // Output: 5
