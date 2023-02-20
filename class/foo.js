/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-shadow */

function Car(name) {
  this.name = name;
  this.position = 0;
  // this.move = function () {
  //   this.position += 1;
  // };
}

Car.prototype.move = function () {
  this.position += 1;
};

const car1 = new Car('Eagle');

console.log(car1);
car1.move();
console.log(car1);

const car2 = new Car('yeah');
console.log(car2);
car2.move();
console.log(car2);
