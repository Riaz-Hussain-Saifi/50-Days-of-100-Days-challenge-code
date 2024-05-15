"use strict";
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
Object.defineProperty(exports, "__esModule", { value: true });
function invokeCallback(callback, ...args) {
    callback(...args);
}
invokeCallback(console.log, 1, 2, 3); // 1 2 3
