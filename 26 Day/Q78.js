"use strict";
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
Object.defineProperty(exports, "__esModule", { value: true });
// Function Expressions
function square(num) {
    return num * num;
}
// Function Declarations
let squareExpression = function (num) {
    return num * num;
};
