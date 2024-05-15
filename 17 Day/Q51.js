"use strict";
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
// Original function
function calculateRectangleArea(length, width) {
    return length * width;
}
// Refactored as an arrow function
const calculateRectangleAreaArrow = (length, width) => length * width;
// Now you have both the original function and the arrow function available.
