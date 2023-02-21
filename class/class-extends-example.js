/* eslint-disable max-classes-per-file */
class Animal {
  constructor(name) {
    console.log(1);
    console.log(this); // Dog {}
    this.name = name;
    console.log(2);
    console.log(this); // Dog { name: '뽀삐' }
  }

  speak() {
    console.log(`${this.name}은(는) 소리를 냅니다.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    console.log(3);
    console.log(this); // Dog { name: '뽀삐' }
    this.breed = breed;
    console.log(4);
    console.log(this); // Dog { name: '뽀삐', breed: '말티즈' }
  }

  speak() {
    super.speak();
    console.log(`${this.name}은(는) 짖습니다.`);
  }

  getBreed() {
    console.log(`${this.name}의 품종은 ${this.breed} 입니다.`);
  }
}

const dog = new Dog('뽀삐', '말티즈');
dog.speak(); // 뽀삐은(는) 소리를 냅니다. 뽀삐은(는) 짖습니다.
dog.getBreed(); // 뽀삐의 품종은 말티즈 입니다.
