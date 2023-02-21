/* eslint-disable max-classes-per-file */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
class Base {
  constructor() {

  }
}

class Derived extends Base {
  constructor(...args) {
    super(...args);
  }
}

const derived = new Derived();
console.log(derived);
