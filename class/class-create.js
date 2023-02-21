// eslint-disable-next-line max-classes-per-file
class Car {
  constructor(name) { // 생성자
    this.name = name;
    this.position = 0;
  }

  move() { // 메소드
    this.position += 1;
  }

  honk() { // 메소드
    console.log(`${this.name} : ${'빵'.repeat(this.position)}`);
  }
}

const car = new Car('가브리엘');
car.honk();
car.move();
car.honk();

// 클래스는 함수입니다.
console.log(typeof Car); // function

// 정확히는 생성자 메서드와 동일합니다.
console.log(Car === Car.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
console.log(Car.prototype.move); // [Function: move]

// 현재 프로토타입에는 메서드가 두 개입니다.
console.log(Object.getOwnPropertyNames(Car.prototype)); // [ 'constructor', 'move', 'honk' ]
