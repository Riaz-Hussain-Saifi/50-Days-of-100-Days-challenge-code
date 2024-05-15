// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

const arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', 'f', 6, 7, 8, 9, 10];

const newArr = arr.filter(item => typeof item === 'string');

console.log(newArr);

