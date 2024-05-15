// Q21 - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define a TypeScript object representing a fruit
type Fruit = {
  name: string;
  color: string;
  taste: string;
};

// Create objects representing different fruits
let apple: Fruit = {
  name: "Apple",
  color: "Red",
  taste: "Sweet and slightly tart",
};

let banana: Fruit = {
  name: "Banana",
  color: "Yellow",
  taste: "Sweet and creamy",
};

let orange: Fruit = {
  name: "Orange",
  color: "Orange",
  taste: "Sweet and tangy",
};

// Print information about the fruits
console.log("Apple:", apple);
console.log("Banana:", banana);
console.log("Orange:", orange);
