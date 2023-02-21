/* eslint-disable max-classes-per-file */
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi${this.name}`;
  }
}

class Derived extends Base {
  sayHi() {
    return `${super.sayHi()}`;
  }
}

const derived = new Derived('가브리엘');
console.log(derived.sayHi()); // Hi가브리엘
