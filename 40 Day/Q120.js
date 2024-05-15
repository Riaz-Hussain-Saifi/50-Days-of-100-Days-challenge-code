"use strict";
// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
Object.defineProperty(exports, "__esModule", { value: true });
let movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "The Dark Knight",
    "12 Angry Men",
    "Schindler's List",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "The Good, the Bad and the Ugly",
    "Fight Club",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Inception",
    "The Lord of the Rings: The Two Towers",
    "One Flew Over the Cuckoo's Nest",
    "Goodfellas",
    "The Matrix",
    "Se7en",
    "The Silence of the Lambs",
    "It's a Wonderful Life",
    "City Lights",
    "The Usual Suspects",
    "The Departed",
    "Terminator 2: Judgment Day",
    "Back to the Future",
    "Whiplash",
    "Sunset Boulevard",
    "The Pianist",
    "The Lion King",
    "Alien",
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
];
for (let i = 1; i <= movies.length; i++) {
    console.log(i + ": " + movies[i - 1]);
}
