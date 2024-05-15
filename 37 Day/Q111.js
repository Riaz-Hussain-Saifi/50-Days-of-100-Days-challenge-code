"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
if (age < 13) {
    console.log("Child");
}
else if (age < 20) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
