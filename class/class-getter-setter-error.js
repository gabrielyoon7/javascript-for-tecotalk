class Car {
  constructor(name) { // 생성자
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
}

const car = new Car('가브리엘');
