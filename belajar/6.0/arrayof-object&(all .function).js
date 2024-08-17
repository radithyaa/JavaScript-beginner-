const fruits = [
  { name: `apple`, color: `red`, calories: 95 },
  { name: `orange`, color: `orange`, calories: 45 },
  { name: `banana`, color: `yellow`, calories: 105 },
  { name: `coconut`, color: `white`, calories: 159 },
  { name: `pineapple`, color: `yellow`, calories: 37 },
];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

// .push()

fruits.push({ name: `grapes`, color: `purple`, calories: 62 });
console.log(fruits[5]);

// .pop()

fruits.pop();
console.log(fruits);

// .splice()

fruits.splice(1, 2);
console.log(fruits);

// .forEach()

fruits.forEach((fruit) => console.log(fruit));
fruits.forEach((fruit) => console.log(fruit.name));

// .map()

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
console.log(fruitNames);
console.log(fruitColors);

// .filter()

const yellowFruits = fruits.filter((fruit) => fruit.color === `yellow`);
const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
const lowCalFruits = fruits.filter((fruit) => fruit.calories <= 100);
console.log(yellowFruits);
console.log(highCalFruits);
console.log(lowCalFruits);

// .reduce()

const maxCalFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
const minCalFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(maxCalFruit);
console.log(minCalFruit);
