"use strict";
// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
Object.defineProperty(exports, "__esModule", { value: true });
function findAverageGrade(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}
console.log(findAverageGrade([30, 40, 50, 60, 70, 80, 90, 100]));
