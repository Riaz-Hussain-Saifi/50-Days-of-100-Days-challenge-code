// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

const today = new Date();

const newYear = new Date(today.getFullYear() + 1, 0, 1); // We add 1 to the current year to get to the next year and set the month to 0 (January) and the date to 1 (first day of January).

const oneDay: number = 1000 * 60 * 60 * 24; // There are 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, and 24 hours in a day.

const daysLeft: number = Math.ceil((newYear.getTime() - today.getTime()) / oneDay); //  This calculates the difference between the newYear date and the today date in milliseconds, then converts it into days by dividing by oneDay. Math.ceil is used to round up to the nearest whole number to ensure we get the remaining days until New Year.

console.log("Days left until New Year:", daysLeft); // This prints the result to the console, indicating the number of days left until the next New Year.

