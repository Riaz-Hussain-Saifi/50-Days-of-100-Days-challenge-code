"use strict";
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
Object.defineProperty(exports, "__esModule", { value: true });
const fruits = ["Apple", "Banana", "Orange", "Watermelion", "Pineapple"];
const index = fruits.indexOf("Banana"); // Result should be 1
fruits[index] = "Mango"; // Replaced Banana to Mango
console.log(fruits);
