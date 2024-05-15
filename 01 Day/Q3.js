"use strict";
// Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Riaz Hussain";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
