/* eslint-disable max-classes-per-file */
class Vehicle {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }
}

class Car extends Vehicle {
  honk() {
    console.log(`${this.name} : ${'빵'.repeat(this.position)}`);
  }
}

const car = new Car('가브리엘');
console.log(car); // Car { name: '가브리엘', position: 0 }

car.move();
car.move();
car.move();
console.log(car); // Car { name: '가브리엘', position: 3 }

car.honk(); // 가브리엘 : 빵빵빵

console.log(car instanceof Car); // true
console.log(car instanceof Vehicle); // true
