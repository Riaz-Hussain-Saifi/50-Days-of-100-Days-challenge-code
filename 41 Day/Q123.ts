// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

let vowels = "aeiou";
let str = "The quick brown fox jumps over the lazy dog";
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    console.log(str[i]);
    break;
  }
}
