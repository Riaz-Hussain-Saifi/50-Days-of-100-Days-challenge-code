// Question 101: Generate a random integer between 1 and 10.

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let GeneratedNumber = getRandomInt(1, 10);

console.log(GeneratedNumber);
