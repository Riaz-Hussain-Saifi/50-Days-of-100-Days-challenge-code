"use strict";
// Q5 - Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
Object.defineProperty(exports, "__esModule", { value: true });
// Lets start
function famousQuote2() {
    var famous_person = "Albert Einstein";
    var quote = "A person who never made a mistake never tried anything new.";
    var message = famous_person + " once said, " + '"' + quote + '"';
    console.log(message);
}
famousQuote2();
