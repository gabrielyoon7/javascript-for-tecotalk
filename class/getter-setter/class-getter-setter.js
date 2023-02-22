class Car {
  constructor(name) { // 생성자
    this.name = name;
    this.position = 0;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const car = new Car('가브리엘');
console.log(car); // Car { _name: '가브리엘', position: 0 }
console.log(car.name); // 가브리엘
car.name = '엘리브가';
console.log(car.name); // 엘리브가
