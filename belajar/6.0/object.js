const person1 = {
  firstname: `spongebob`,
  lastname: `squarepants`,
  age: 30,
  isEmployed: true,
  sayhello: function () {
    console.log(`Hi! I am ${this.firstname}`);
  },
  eat: () => console.log(`I am eating Krabby Patty`),
};

const person2 = {
  firstname: `Patrick`,
  lastname: `Star`,
  age: 42,
  isEmployed: false,
  sayhello: () => console.log(`Hi! I am patrick...`),
  eat: () => console.log(`I am eating roast beaf chicken, and pizza`),
};

function car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`you drive the ${this.model}`);
  };
}

const car1 = new car(`Ford`, `Mustang`, 2024, `red`);
const car2 = new car(`Chevrolet`, `Camaro`, 2025, `blue`);
const car3 = new car(`Dodge`, `Charger`, 2026, `silver`);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

// console.log(person1);
// console.log(person2);
// person2.eat();
// person1.sayhello();
