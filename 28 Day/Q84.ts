// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceText(sentence: string): string {
    return sentence.replace("JavaScript", "TypeScript");
}

console.log(replaceText("JavaScript is the best language in the world"));
// result shows TypeScript is the best language in the world