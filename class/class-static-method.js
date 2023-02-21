class Car {
  static staticMethod() {
    console.log(this === Car);
  }
}

Car.staticMethod(); // true
