// Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string, message: string = "I love TypeScript") {
  console.log(`The size of the shirt is ${size} and the message is ${message}`);
}

make_shirt("large");

make_shirt("medium");

make_shirt("small", "I love JavaScript");

make_shirt("medium simall", "I love Python");

make_shirt("large medium", "I love Node.js");
