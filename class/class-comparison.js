/* eslint-disable no-shadow */
/* eslint-disable func-names */
/**
 * 생성자 함수의 객체 생성
 */
console.log('생성자 함수의 객체 생성');
const FunctionCar = (function () {
  function FunctionCar(name) {
    this.name = name;
    this.position = 0;
  }
  FunctionCar.prototype.move = function () {
    this.position += 1;
  };
  return FunctionCar;
}());

const funCar = new FunctionCar('funCar');
console.log(funCar); // FunctionCar { name: 'funCar', position: 0 }
funCar.move();
console.log(funCar); // FunctionCar { name: 'funCar', position: 1 }

/**
 * 클래스의 객체 생성
 */
console.log('클래스의 객체 생성');
class ClassCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }
}

const classCar = new ClassCar('classCar');
console.log(classCar); // ClassCar { name: 'classCar', position: 0 }
classCar.move();
console.log(classCar); // ClassCar { name: 'classCar', position: 1 }
