"use strict";
// Question 99: Generate a date object representing your next birthday and log it to the console.
Object.defineProperty(exports, "__esModule", { value: true });
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const birthMonth = 2; // Assuming my birthday month is Feb (0-indexed)
const birthDate = 12; // Assuming my birthday date is the 12th
// Calculate the next birthday
let nextBirthday = new Date(currentYear, birthMonth, birthDate);
if (nextBirthday < currentDate) {
    // If the next birthday has already passed this year, set it to next year
    nextBirthday = new Date(currentYear + 1, birthMonth, birthDate);
}
// Format the date to only display day, month, and year
const formattedDate = `${nextBirthday.getDate()}-${nextBirthday.getMonth() + 1}-${nextBirthday.getFullYear()}`;
console.log("Next birthday should be:", formattedDate);
