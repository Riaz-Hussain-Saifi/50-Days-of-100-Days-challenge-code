"use strict";
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
Object.defineProperty(exports, "__esModule", { value: true });
function replaceText(sentence) {
    return sentence.replace("JavaScript", "TypeScript");
}
console.log(replaceText("JavaScript is the best language in the world"));
// result shows TypeScript is the best language in the world
