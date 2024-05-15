// Question 106: Determine if a given year is a leap year using comparison operators.

let year: number = 2024;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is not a leap year");
        }
    } else {
        console.log(year + " is a leap year");
    }
} else {
    console.log(year + " is not a leap year");
}
