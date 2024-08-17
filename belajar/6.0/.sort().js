//  Sort by lexicographically, not alphabetical

const people = [
  { name: `Spongebob`, age: 30, gpa: 3.0 },
  { name: `Patrick`, age: 37, gpa: 1.5 },
  { name: `Squidward`, age: 51, gpa: 2.5 },
  { name: `Sandy`, age: 27, gpa: 4.0 },
];

// sortGpa = people.sort((a, b) => a.gpa - b.gpa);
// sortAge = people.sort((a, b) => a.age - b.age);
sortName = people.sort((a, b) => a.name.localeCompare(b.name));

console.log(sortName);
