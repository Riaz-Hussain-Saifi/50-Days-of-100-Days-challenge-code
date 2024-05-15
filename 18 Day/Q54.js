"use strict";
// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function to create the object with dynamic keys
function createFlexibleObject(sectionNames) {
    const flexibleObject = {};
    sectionNames.forEach(sectionName => {
        flexibleObject[sectionName] = [];
    });
    return flexibleObject;
}
// Example usage:
const sections = ["languages", "tools", "frameworks"];
const flexibleSkills = createFlexibleObject(sections);
// Adding data dynamically
flexibleSkills["languages"].push("JavaScript", "Python");
flexibleSkills["tools"].push("Visual Studio Code", "Git");
flexibleSkills["frameworks"].push("React", "Node.js");
console.log(flexibleSkills);
