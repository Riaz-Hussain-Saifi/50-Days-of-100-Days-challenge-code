"use strict";
// Question 92: Write a function to remove the last element from an array and return the removed element.
Object.defineProperty(exports, "__esModule", { value: true });
function removeLastElement(arr) {
    return arr.pop();
}
console.log(removeLastElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
