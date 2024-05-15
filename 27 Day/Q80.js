"use strict";
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "blue"
};
car.year = 2021;
console.log(car);
