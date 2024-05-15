"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
Object.defineProperty(exports, "__esModule", { value: true });
function checkText(str) {
    if (str.includes("JavaScript")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkText("I love JavaScript"));
