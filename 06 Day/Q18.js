"use strict";
// Q18 - Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Define an array of locations
let places = ["Tokyo", "Paris", "New York", "Iran", "Dubai"];
// Print original order
console.log("Original Order:");
console.log(places);
// Print alphabetical order without modifying the original list
console.log("\n Alphabetical Order:");
console.log([...places].sort());
// Show original order is unchanged
console.log("\n Original Order (unchanged):");
console.log(places);
// Print reverse alphabetical order without modifying the original list
console.log("\n Reverse Alphabetical Order:");
console.log([...places].sort().reverse());
// Show original order is unchanged
console.log("\n Original Order (unchanged):");
console.log(places);
// Reverse the order of the list
places.reverse();
console.log("\n Reversed Order:");
console.log(places);
// Reverse the order of the list again to get back to the original order
places.reverse();
console.log("\n Back to Original Order:");
console.log(places);
// Sort the array in alphabetical order
places.sort();
console.log("\n Sorted in Alphabetical Order:");
console.log(places);
// Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("\n Sorted in Reverse Alphabetical Order:");
console.log(places);
