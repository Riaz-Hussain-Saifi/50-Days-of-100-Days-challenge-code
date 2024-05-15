// Question 149: Explain the concept of the event loop in JavaScript with an example.

// Answer 149: The event loop is a single-threaded, single-process, single-thread execution model.
// It is a mechanism that allows JavaScript to handle multiple events simultaneously.
// The event loop is responsible for managing the execution of JavaScript code and the handling of events.
// It is a key component of the JavaScript runtime environment and is used by all modern browsers.
// Here is an example of how the event loop works in JavaScript:

console.log('Start'); // Start

setTimeout(() => {
  console.log("Timeout 1"); // Timeout 1
}, 0);

Promise.resolve()
    .then(() => {
      console.log("Promise 1"); // Promise 1
    });

console.log('End'); // End
