"use strict";
// Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let str1 = "hello";
let str2 = "world";
let num1 = 5;
let num2 = 10;
let array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == "hello"); // True
console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2); // True
// Tests using the lower case function
console.log("Is str1.toLowerCase() == 'hello'? I predict True.");
console.log(str1.toLowerCase() == "hello"); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is num1 == 5? I predict True.");
console.log(num1 == 5); // True
console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2); // False
console.log("Is num2 >= 10? I predict True.");
console.log(num2 >= 10); // True
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2); // True
console.log("Is num2 <= 10? I predict True.");
console.log(num2 <= 10); // True
// Tests using "and" and "or" operators
console.log("Is num1 < 10 && num2 > 5? I predict True.");
console.log(num1 < 10 && num2 > 5); // True
console.log("Is num1 < 3 || num2 > 15? I predict False.");
console.log(num1 < 3 || num2 > 15); // False
// Test whether an item is in an array
console.log("Is 3 in array? I predict True.");
console.log(array.includes(3)); // True
// Test whether an item is not in an array
console.log("Is 6 not in array? I predict True.");
console.log(!array.includes(6)); // True
