// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.


const laptops1Prices: number[] = [1200, 800, 1500, 1000];
const laptops2Prices: number[] = [900, 1100, 1300, 950];

const combinedPrices: number[] = [...laptops1Prices, ...laptops2Prices].sort(
  (a, b) => a - b
);

console.log(combinedPrices);
