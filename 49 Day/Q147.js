"use strict";
// Question 147: Explain how to handle errors in a callback pattern.
Object.defineProperty(exports, "__esModule", { value: true });
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
