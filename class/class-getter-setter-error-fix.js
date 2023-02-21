class Car {
  #name = '';

  constructor(name) { // 생성자
    this.name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

const car = new Car('가브리엘');
console.log(car); // Car {}
console.log(car.name); // 가브리엘
