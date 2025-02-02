// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greet(name: string = 'Anonymous') {
    console.log(`Hello ${name}`);
}

greet(); // Hello Anonymous
greet('Liaqat Ali'); // Hello Liaqat Ali

