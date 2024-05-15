"use strict";
// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
const laptops1Prices = [1200, 800, 1500, 1000];
const laptops2Prices = [900, 1100, 1300, 950];
const combinedPrices = [...laptops1Prices, ...laptops2Prices].sort((a, b) => a - b);
console.log(combinedPrices);
