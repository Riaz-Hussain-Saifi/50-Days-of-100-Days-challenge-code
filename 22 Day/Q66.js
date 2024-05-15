"use strict";
// Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
Object.defineProperty(exports, "__esModule", { value: true });
function checkBothTrue(bool1, bool2) {
    return bool1 && bool2;
}
console.log(checkBothTrue(true, true)); // Result will be true;
console.log(checkBothTrue(true, false)); // Result will be false;
console.log(checkBothTrue(false, true)); // Result will be false;
console.log(checkBothTrue(false, false)); // Result will be false;
