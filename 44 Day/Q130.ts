// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// Answer 130:
// To export a function from one JavaScript file, use the export keyword followed by the name of the function. For example:
 
export function add(a: any, b: any) {
    return a + b;
}

// To import a function from another file, use the import keyword followed by the name of the function. For example:
/*
import { add } from './Q130.js';

console.log(add(1, 2));
*/
// This will import the add function from the Q130.js file and make it available in the current file.

