"use strict";
// Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
const names = ["Liaqat", "Asad", "Faraz", "Sheraz"];
for (let i = 0; i < names.length; i++) {
    console.log(`Asslam Alaikum, ${names[i]}`);
}
