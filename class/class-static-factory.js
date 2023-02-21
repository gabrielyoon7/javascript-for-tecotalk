class Car {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  static createCar() {
    // this는 Car입니다.
    return new this('가브리엘', new Date());
  }
}

const car = Car.createCar();

console.log(car); // car 객체
