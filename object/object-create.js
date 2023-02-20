console.log('object-create.js');

/**
 * 객체를 생성하는 법
 */

// 객체 리터럴
const car = {
  name: 'Sonata',
  move() {
    console.log('한 칸 전진합니다.');
  },
};
console.log(car); // { name: 'Sonata', move: [Function: move] }
