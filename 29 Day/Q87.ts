// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

// Using `substring` method:
let str = "Hello, world!";
let first10Chars = str.substring(0, 10);
console.log(first10Chars); // Output: "Hello, wor"

// Using string slicing:
let str2 = "Hello, world!";
let first10Chars2 = str.slice(0, 10);
console.log(first10Chars); // Output: "Hello, wor"

// Both `substring` and `slice` methods extract a portion of a string and return it as a new string. The first argument specifies the starting index, and the second argument specifies the ending index (exclusive). In this case, `0` is the starting index, and `10` is the ending index, so it extracts characters from index `0` to `9`, inclusive.