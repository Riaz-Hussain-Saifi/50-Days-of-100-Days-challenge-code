// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.

function findAverageGrade(grades: number[]): number {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

console.log(findAverageGrade([30, 40, 50, 60, 70, 80, 90, 100]));