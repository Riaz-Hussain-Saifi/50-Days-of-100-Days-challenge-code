// Question 145: Create a function that accepts a callback and invokes it with some arguments.

function invokeCallback(callback: any, ...args: any) {
    callback(...args);
}

invokeCallback(console.log, 1, 2, 3); // 1 2 3

