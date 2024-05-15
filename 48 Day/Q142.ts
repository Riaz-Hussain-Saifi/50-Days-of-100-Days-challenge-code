// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Creating a Promise that resolves with "Hello, World!" after 2 seconds can be done using the `setTimeout` function to delay the resolution of the Promise. Here is the implementation in TypeScript:


function delayedHelloWorld(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });
}

// Usage example
delayedHelloWorld().then(message => console.log(message));

// Output: "Hello, World!" after 2 seconds

// ### Explanation:
// 1. **Function Definition**: The function `delayedHelloWorld` is defined to return a `Promise<string>`.
// 2. **Promise Constructor**: Inside the function, a new `Promise` is created. The constructor function takes a single argument: a function with `resolve` and `reject` parameters.
// 3. **setTimeout**: The `setTimeout` function is used to delay the execution of its callback function by 2000 milliseconds (2 seconds).
// 4. **Resolving the Promise**: After 2 seconds, the `resolve` function is called with the string "Hello, World!".
// 5. **Usage Example**: The `delayedHelloWorld` function is called, and the resolved value is logged to the console using `.then()`.

// This approach leverages the asynchronous nature of JavaScript and TypeScript to delay the resolution of a Promise, which is a common pattern in asynchronous programming.