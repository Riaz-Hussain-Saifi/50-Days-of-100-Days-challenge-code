"use strict";
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
Object.defineProperty(exports, "__esModule", { value: true });
// Example with arrow function
let obj = {
    name: "Riaz",
    greet: function () {
        setTimeout(() => {
            console.log("Hello, " + this.name); // 'this' refers to obj because arrow function inherits 'this' from surrounding lexical scope
        }, 1000);
    }
};
obj.greet(); // Output: Hello, Riaz
// Example with traditional function
/*
let obj2 = {
  name: "Hussain",
  greet: function() {
    setTimeout(function() {
setTimeout(() => {
  console.log("Hello, " + this.name); // 'this' refers to obj2 because arrow function inherits 'this' from surrounding lexical scope
}, 1000);
    }.bind(this), 1000); // bind 'this' to the current object (obj2)
  }
};

obj2.greet(); // Output: Hello, Hussain
*/ 
