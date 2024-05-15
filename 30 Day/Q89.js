"use strict";
// Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.
Object.defineProperty(exports, "__esModule", { value: true });
function roundToTwoDecimalPlaces(num) {
    return Number(num.toFixed(2));
}
// Example usage:
const roundedNumber = roundToTwoDecimalPlaces(3.14159);
console.log(roundedNumber); // Output: 3.14
