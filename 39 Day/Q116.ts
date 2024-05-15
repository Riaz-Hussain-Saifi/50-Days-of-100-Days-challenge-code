// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

let season = "summer";

switch (season) {
    case "spring":
    case "summer":
    case "autumn":
    case "winter":
        console.log("It's a season!");
        break;
    default:
        console.log("It's not a season!");
        break;
}
