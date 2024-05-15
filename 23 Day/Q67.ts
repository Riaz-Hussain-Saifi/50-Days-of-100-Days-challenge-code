// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function add(num1: number, num2: string): number {
    return Number(num1) + Number(num2);
}

console.log(add(5, "5"));  // Result 55
