"use strict";
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
Object.defineProperty(exports, "__esModule", { value: true });
const time = new Date();
const hours = time.getHours();
if (hours < 12) {
    console.log("Good Morning");
}
