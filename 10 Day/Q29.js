"use strict";
// Q29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
else if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
else if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
else if (favorite_fruits.includes("pear")) {
    console.log("You really like pears!");
}
else if (favorite_fruits.includes("peach")) {
    console.log("You really like peaches!");
}
