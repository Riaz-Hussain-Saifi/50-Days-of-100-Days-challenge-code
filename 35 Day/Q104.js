"use strict";
// Question 104: Create a function that generates a random hexadecimal color code.
Object.defineProperty(exports, "__esModule", { value: true });
function randomHexColorCode() {
    let letters = '0123456789ABCDEF'; // Define a string containing all valid hexadecimal digits.
    let color = '#'; // Initialize the color variable with the hash symbol, which is the prefix for hexadecimal color codes.
    for (let i = 0; i < 6; i++) { // Iterate six times to generate a six-digit hexadecimal color code.
        color += letters[Math.floor(Math.random() * 16)]; // Generate a random index within the range of valid hexadecimal digits (0-15) and append the corresponding digit to the color code.
    }
    return color; // Return the generated hexadecimal color code.
}
console.log(randomHexColorCode()); // Call the function and log the generated color code to the console.
