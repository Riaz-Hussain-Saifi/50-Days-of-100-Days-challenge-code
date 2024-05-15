"use strict";
// Question 134: Take a JSON string and parse it into a JavaScript object.
Object.defineProperty(exports, "__esModule", { value: true });
var jsonString = '{"name": "Riaz", "age": 23, "city": "Karachi"}';
var obj = JSON.parse(jsonString);
console.log(obj);
