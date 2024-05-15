// Q31 - No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users: string[] = ["Babar", "Naeem", "Farman"]; // Sample list of users
let age = 20;

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  users = []; // Removing all usernames
  if (users.length === 0) {
    console.log("We need to find some users!");
  } else {
    if (age < 2) {
      console.log("The person is a baby");
    } else if (age >= 2 && age < 4) {
      console.log("The person is a toddler");
    } else if (age >= 4 && age < 13) {
      console.log("The person is a kid");
    } else if (age >= 13 && age < 20) {
      console.log("The person is a teenager");
    } else if (age >= 20 && age < 65) {
      console.log("The person is an adult");
    } else if (age >= 65) {
      console.log("The person is an elder");
    }
  }
}
