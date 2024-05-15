"use strict";
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
Object.defineProperty(exports, "__esModule", { value: true });
let counting = [];
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    counting.push(i);
}
console.log(counting);
