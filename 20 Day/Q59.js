"use strict";
// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Object.defineProperty(exports, "__esModule", { value: true });
function adder(num) {
    return function (num2) {
        return num + num2;
    };
}
const add10 = adder(10);
const add20 = adder(20);
console.log(add10(10));
console.log(add20(10));
