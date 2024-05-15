"use strict";
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
Object.defineProperty(exports, "__esModule", { value: true });
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const wordLengths = words.map(word => word.length);
console.log(wordLengths); // 5, 5, 5, 9, 11, 7
