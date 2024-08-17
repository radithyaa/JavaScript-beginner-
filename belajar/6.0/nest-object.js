const person = {
  fullname: `Spongebob Squarepants`,
  age: 30,
  isStudent: true,
  hobbies: [`Karate`, `Jellyfishing`, `Cooking`],
  address: {
    street: `124 conch st.`,
    city: `Bikini Bottom`,
    country: `Int. Water`,
  },
};

for (const property in person.address) {
  console.log(person.address[property]);
}

//  For class, pusing bjir

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  `Patrick`,
  37,
  `128 Conch st.`,
  `Bikini Bottom`,
  `Int. Water`
);
const person2 = new Person(
  `Spongebob`,
  30,
  `124 Conch st.`,
  `Bikini Bottom`,
  `Int. Water`
);
const person3 = new Person(
  `Squidward`,
  45,
  `126 Conch st.`,
  `Bikini Bottom`,
  `Int. Water`
);

console.log(person2);
console.log(person2.address);
console.log(person1.address);
console.log(person3.address);
console.log(person3.address.country);
