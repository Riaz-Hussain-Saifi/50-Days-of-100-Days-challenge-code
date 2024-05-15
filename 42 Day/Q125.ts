// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

const person = {
  name: 'Riaz Hussain',
  age: 23,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet(); // Hello, my name is Riaz Hussain and I am 23 years old.