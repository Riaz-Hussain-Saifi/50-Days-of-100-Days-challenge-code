"use strict";
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
Object.defineProperty(exports, "__esModule", { value: true });
function tryCatch() {
    try {
        console.log(0);
        throw 5;
        console.log(1);
    }
    catch (e) {
        console.log(2);
        console.log(e);
    }
    console.log(3);
}
tryCatch(); // show 0, 2, 5, 3
