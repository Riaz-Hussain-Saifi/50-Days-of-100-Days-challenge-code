"use strict";
// Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// Function to make magicians great
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push("The Great " + magician);
    }
    return great_magicians;
}
// Function to show magicians
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
let magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
// Call make_great with a copy of the magicians array
let great_magicians = make_great([...magicians]);
// Show original magicians
console.log("Original magicians:");
show_magicians(magicians);
// Show great magicians
console.log("\nGreat magicians:");
show_magicians(great_magicians);
