"use strict";
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Riaz Hussain",
    getName: function () {
        return this.name;
    }
};
console.log(person.getName());
