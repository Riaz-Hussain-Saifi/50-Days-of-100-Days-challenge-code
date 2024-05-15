"use strict";
// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'Riaz Hussain',
    age: 23,
    sayHi() {
        console.log(`Hi, I am ${this.name} my age is ${this.age}`);
    }
};
user.sayHi();
