// Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Function to make magicians great
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
  }
}

// Array of magician's names
let magicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

// Function to show magicians
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Call make_great to modify the list of magicians
make_great(magicians);

// Call show_magicians to see the modified list
show_magicians(magicians);
