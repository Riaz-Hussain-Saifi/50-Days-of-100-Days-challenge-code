"use strict";
// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
Object.defineProperty(exports, "__esModule", { value: true });
let a = 5;
let b = 10;
// Now 
let temp = a;
a = b; // Here will be 10 
b = temp;
console.log(a);
console.log(b);
