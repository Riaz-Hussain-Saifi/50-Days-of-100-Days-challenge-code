"use strict";
// Question 133: Write a JavaScript object and convert it into a JSON string.
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    name: "Riaz",
    age: 23,
    city: "Karachi"
};
var json = JSON.stringify(obj);
console.log(json);
