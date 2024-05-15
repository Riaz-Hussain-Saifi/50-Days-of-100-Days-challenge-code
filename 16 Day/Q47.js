"use strict";
// Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
Object.defineProperty(exports, "__esModule", { value: true });
const laptops = [
    {
        make: "Apple",
        model: "MacBook Pro",
        year: 2020,
    },
    {
        make: "Apple",
        model: "MacBook Air",
        year: 2020,
    },
];
const [first, second] = laptops;
console.log(first);
console.log(second);
