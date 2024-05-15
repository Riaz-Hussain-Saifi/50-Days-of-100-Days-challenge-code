// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.



// Original function
function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

// Refactored as an arrow function
const calculateRectangleAreaArrow = (length: number, width: number): number =>
  length * width;

// Now you have both the original function and the arrow function available.
