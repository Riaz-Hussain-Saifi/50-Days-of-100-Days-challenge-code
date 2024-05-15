// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function quotientAndRemainder(num1: number, num2: number): {quotient: number, remainder: number} {
    return {quotient: Math.floor(num1 / num2), remainder: num1 % num2};
}

console.log(quotientAndRemainder(10, 3)); // {quotient: 3, remainder: 1}
console.log(quotientAndRemainder(10, 2)); // {quotient: 5, remainder: 0}