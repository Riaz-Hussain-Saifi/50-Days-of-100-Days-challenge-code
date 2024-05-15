// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

let studentMap = new Map();

studentMap.set(1, "John");

studentMap.set(2, "Jane");

studentMap.set(3, "Mark");

for (let [key, value] of studentMap) {
  console.log(key + " - " + value);
}

