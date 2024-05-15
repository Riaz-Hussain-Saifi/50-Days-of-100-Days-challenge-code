// Q58 - Write a simple program that can take lots of scores and find their average.

let scores: number[] = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let sum: number = 0;

for (let i: number = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average: number = sum / scores.length;

console.log(average);
