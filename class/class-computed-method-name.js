/* eslint-disable no-useless-concat */
/* eslint-disable class-methods-use-this */
class Car {
  ['honk' + 'ManyTimes']() {
    console.log('빵'.repeat(5));
  }
}

const car = new Car();
car.honkManyTimes(); // 빵빵빵빵빵
