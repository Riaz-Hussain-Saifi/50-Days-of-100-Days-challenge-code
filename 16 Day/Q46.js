"use strict";
// Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
Object.defineProperty(exports, "__esModule", { value: true });
const laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2017,
    describe: function () {
        console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
