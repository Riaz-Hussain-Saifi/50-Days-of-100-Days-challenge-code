"use strict";
// Question 101: Generate a random integer between 1 and 10.
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let GeneratedNumber = getRandomInt(1, 10);
console.log(GeneratedNumber);
