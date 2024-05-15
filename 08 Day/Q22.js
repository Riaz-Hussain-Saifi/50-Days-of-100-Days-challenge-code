"use strict";
// Q22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
// Define an array of locations
let places = ["Tokyo", "Paris", "New York", "Dubai", "Pakistan"];
// Attempt to access an index that is out of bounds
console.log(places[5]); // This line will produce an index error because the array only has indices 0 to 4
// Print original order
console.log("Original Order:");
console.log(places);
// Print the last element of the array
console.log("Last Element:");
console.log(places[4]); // Accessing the last element with index 4
// Attempt to access an index that is out of bounds
// console.log(places[5]); // This line will produce an index error because the array only has indices 0 to 4
