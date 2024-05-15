"use strict";
// Q58 - Write a simple program that can take lots of scores and find their average.
Object.defineProperty(exports, "__esModule", { value: true });
let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
let average = sum / scores.length;
console.log(average);
