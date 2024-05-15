"use strict";
// Question 90: Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(randomNumber());
randomNumber();
