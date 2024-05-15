// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function findCode(str: string): number {
    return str.indexOf("code");
}

console.log(findCode("codecodecode")); // 0
