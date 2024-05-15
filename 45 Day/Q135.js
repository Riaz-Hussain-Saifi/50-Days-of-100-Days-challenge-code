"use strict";
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer 135:
// 1. We can use the JSON.stringify() method to convert a JSON object into a string. The JSON.stringify() method takes an optional second argument that specifies
// the indentation level for the output string. For example, the following code converts a JSON object into a string with two spaces of indentation
var obj = {
    "name": "Riaz",
    "age": 23,
    "city": "Pakistan"
};
var str = JSON.stringify(obj, null, 2);
