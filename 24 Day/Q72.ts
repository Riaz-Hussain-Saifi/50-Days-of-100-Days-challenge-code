// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

let x = 10;
const y = 20;

{
    let x = 30;
    const y = 40;
    console.log(x);
    console.log(y);
}

console.log(x);
console.log(y);
