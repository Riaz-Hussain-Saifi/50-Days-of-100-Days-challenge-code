"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class1 = void 0;
// Answer 131:
// module1.js
class Class1 {
    constructor() {
        console.log('Class1');
    }
}
exports.Class1 = Class1;
// module2.js
/*
import Class1 from './Q131.js';

const class1 = new Class1();
*/ 
