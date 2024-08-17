//      Inheritance

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = `Rabbit`;

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = `Fish`;

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = `Hawk`;

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
console.log(fish.eat());
console.log(hawk.eat());
console.log(rabbit.run());
console.log(fish.swim());
console.log(hawk.fly());
console.log(rabbit.fly());
