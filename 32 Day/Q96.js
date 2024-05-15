"use strict";
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // sum of all numbers is 55
