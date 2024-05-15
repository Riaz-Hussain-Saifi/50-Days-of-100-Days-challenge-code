"use strict";
// Q41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    console.log("\n");
    return magicians;
}
let magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
show_magicians(magicians);
