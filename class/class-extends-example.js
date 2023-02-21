/* eslint-disable max-classes-per-file */
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}은(는) 소리를 냅니다.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
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
