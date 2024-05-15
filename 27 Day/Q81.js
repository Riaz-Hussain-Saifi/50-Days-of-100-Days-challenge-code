"use strict";
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: 'Riaz Hussain',
    age: 23,
    city: 'Pakistan'
};
function logProperties(obj) {
    for (let key in obj) {
        console.log(key, obj[key]);
    }
}
logProperties(obj);
