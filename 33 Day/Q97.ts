// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function currentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(currentDate());  // Current Day-Date-Year should be print always

