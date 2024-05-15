"use strict";
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    name;
    constructor(name) {
        this.name = name;
    }
    outerMethod() {
        console.log("Outer method:", this.name); // 'this' refers to the object instance (MyClass)
        // Define nestedFunction inside outerMethod
        function nestedFunction() {
            console.log("Nested function:", this.name); // 'this' refers to the global object or undefined (depends on strict mode)
        }
        // Call nestedFunction within outerMethod
        nestedFunction.call(this);
    }
}
const obj = new MyClass("Riaz");
obj.outerMethod(); // Output: Outer method: Riaz
//         Nested function: Riaz
