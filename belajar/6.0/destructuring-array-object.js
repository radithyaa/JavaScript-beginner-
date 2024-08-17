// Destructuring array & objects
// [] = to perform array destructuring
// {} = to perform object destructuring

function displayperson({ firstname, lastname, age, job = `unemployed` }) {
  console.log(`name: ${firstname} ${lastname}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstname: `Spongebob`,
  lastname: `Squarepants`,
  age: 30,
  job: `Fry cook`,
};
const person2 = {
  firstname: `Patrick`,
  lastname: `Stars`,
  age: 34,
};

displayperson(person1);
displayperson(person2);
