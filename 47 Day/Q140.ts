// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.

// When we try to use a reserved word as a variable name in TypeScript or any programming language, we typically encounter a syntax error. This error occurs because reserved words are part of the language's syntax and are reserved for specific purposes such as defining language constructs, keywords, or built-in functionality.

// For example, if we try to use a reserved word like `class` as a variable name:

/*
let class = "Mathematics";
*/ 
// Error: Unexpected token 'class'. Declaration or statement expected.

// In this case, TypeScript (or any JavaScript runtime) expects `class` to be used for defining a class construct, so using it as a variable name violates the language syntax rules, resulting in a syntax error.



// Similarly, if we try to use other reserved words like `private`, `interface`, `typeof`, etc., as variable names, we'll encounter similar syntax errors because these words are reserved for specific purposes within the language.

// To resolve this error, we should choose a different variable name that does not conflict with any reserved words in the language.

