// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

const doubleNumbers = (numbers: number[]): number[] => {
  return numbers.map(num => num * 2);
};

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
