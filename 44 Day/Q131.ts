// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// Answer 131:

// module1.js

export class Class1 {
  constructor() {
    console.log('Class1');
  }
}

// module2.js
/*
import Class1 from './Q131.js';

const class1 = new Class1();
*/