"use strict";
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
Object.defineProperty(exports, "__esModule", { value: true });
const map = new Map();
map.set("Canada", "Ottawa");
map.set("France", "Paris");
map.set("Japan", "Tokyo");
function checkMap(map) {
    if (map.has("Canada")) {
        console.log(map.get("Canada"));
    }
}
checkMap(map);
