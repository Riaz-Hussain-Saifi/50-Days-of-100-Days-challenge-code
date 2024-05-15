// Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

interface Smartphone {
  brand: string;
  model: string;
  storage: number; // Storage in GB
  screenSize: number; // Screen size in inches
  batteryLife: number; // Battery life in hours
}

const mySmartphone: Smartphone = {
  brand: "Infinix",
  model: "Hot 10",
  storage: 128,
  screenSize: 6.5,
  batteryLife: 24,
};

console.log("My smartphone details:");
console.log(`Brand: ${mySmartphone.brand}`);
console.log(`Model: ${mySmartphone.model}`);
console.log(`Storage: ${mySmartphone.storage}GB`);
console.log(`Screen Size: ${mySmartphone.screenSize} inches`);
console.log(`Battery Life: ${mySmartphone.batteryLife} hours`);
