// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

const programmerSkills = {
  languages: ["TypeScript", "Python", "HTML", "C++"],
  tools: ["Visual Studio Code", "Git", "Docker", "NPM"],
  frameworks: ["React", "Node.js", "Django", "Spring Boot"],
};

const { languages, tools, frameworks } = programmerSkills;

console.log("Languages:", languages.slice(0, 3));
console.log("Tools:", tools.slice(0, 3));
console.log("Frameworks:", frameworks.slice(0, 3));
