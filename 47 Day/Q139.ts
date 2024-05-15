// Question 139: List three reserved words in JavaScript and create a valid use case for each.

// 1. `private`: This keyword is used to restrict access to certain class members from outside the class. It is commonly used in object-oriented programming to encapsulate data and ensure data integrity.
 
   class BankAccount {
       private balance: number;

       constructor(initialBalance: number) {
           this.balance = initialBalance;
       }

       // Method to withdraw funds
       withdraw(amount: number) {
           if (amount <= this.balance) {
               this.balance -= amount;
               console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
           } else {
               console.log("Insufficient funds.");
           }
       }
   }

   const myAccount = new BankAccount(1000);
   myAccount.withdraw(500); // Allowed
   console.log(myAccount); // { balance: 500 }

// 2. `typeof`: This keyword is used to obtain the data type of a variable or an expression. It's particularly useful in scenarios where you need to perform type checking or dynamically determine the type of a value.

   function printType(value: any) {
       console.log(`The type of ${value} is ${typeof value}`);
   }

   printType(10); // The type of 10 is number
   printType("Hello"); // The type of Hello is string
   printType(true); // The type of true is boolean

// 3. `interface`: This keyword is used to define the structure of an object. Interfaces in TypeScript provide a way to define contracts within your code, ensuring that objects adhere to specific shapes or structures.

   interface Person {
       name: string;
       age: number;
       greet: () => void;
   }

   class Student implements Person {
       constructor(public name: string, public age: number) {}

       greet() {
           console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
       }
   }

   const student1: Person = new Student("Riaz", 23);
   student1.greet(); // Hello, my name is Riaz and I am 23 years old.
   
   // These examples demonstrate how reserved words like `private`, `typeof`, and `interface` are used in TypeScript to enforce encapsulation, perform type checking, and define object structures respectively.