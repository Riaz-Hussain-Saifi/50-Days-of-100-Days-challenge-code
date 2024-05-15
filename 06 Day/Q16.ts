// Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

var guestList = ["Waqas", "Waqar", "Noman", "Liaqat", "Aadil"];
console.log(guestList);
console.log(guestList.length);
guestList.unshift("Ali");
console.log(guestList);
console.log(guestList.length);
guestList.splice(2, 0, "Ali Gull");
console.log(guestList);
console.log(guestList.length);
guestList.push("Abid");
console.log(guestList);
console.log(guestList.length);

for (let index = 0; index < guestList.length; index++) {
  console.log("Dear " + guestList[index] + " you are invited to dinner!");
}
