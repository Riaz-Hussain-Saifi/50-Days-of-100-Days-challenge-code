// Question 127: Convert a traditional function expression to an arrow function.

// Traditional function expression
let traditionalFunction = function (x: number, y: number): number {
    return x + y;
};

// Arrow function equivalent
let arrowFunction = (x: number, y: number): number => x + y;

// Test the functions
console.log(traditionalFunction(2, 3)); // Output: 5
console.log(arrowFunction(2, 3)); // Output: 5
