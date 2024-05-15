"use strict";
// Question 144: Explain the use of the Promise.all() method with an example.
Object.defineProperty(exports, "__esModule", { value: true });
// Let's consider a scenario where we need to fetch data from three different APIs concurrently and process the results together.
// Simulate API calls with promises
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data from API 1"), 1000);
    });
}
function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data from API 2"), 2000);
    });
}
function fetchData3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data from API 3"), 1500);
    });
}
// Using Promise.all to fetch all data concurrently
async function fetchAllData() {
    try {
        const [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
        console.log("All data fetched:");
        console.log(data1); // "Data from API 1"
        console.log(data2); // "Data from API 2"
        console.log(data3); // "Data from API 3"
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}
// Call the function to see the result
fetchAllData();
// Explanation:
// Promise.all: In the fetchAllData function, Promise.all is used to run all three fetch functions concurrently.
// Promise.all([fetchData1(), fetchData2(), fetchData3()]) returns a promise that resolves when all three promises resolve.
// The resolved value is an array containing the results of the three promises, in the same order as they were passed to Promise.all.
// Await and Destructure: Using await, we wait for all promises to resolve and destructure the results into data1, data2, and data3.
// Logging Results: The results are logged to the console.
// Error Handling: A try/catch block is used to handle any errors that might occur if any of the promises reject.
// Error Handling Example:
// If any promise rejects, the whole Promise.all call will reject. Here's an example with an error:
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Error from API with error"), 1500);
    });
}
async function fetchAllDataWithError() {
    try {
        const [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchDataWithError()]);
        console.log("All data fetched:");
        console.log(data1);
        console.log(data2);
        console.log(data3);
    }
    catch (error) {
        console.error("Error fetching data:", error); // This will log: "Error fetching data: Error from API with error"
    }
}
// Call the function to see the result with an error
fetchAllDataWithError();
// In this case, fetchDataWithError will reject after 1.5 seconds, causing the entire Promise.all to reject and the error to be caught and logged.
