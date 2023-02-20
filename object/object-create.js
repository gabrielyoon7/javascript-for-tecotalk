console.log('object-create.js');

/**
 * 객체를 생성하는 법
 */

// 객체 리터럴
console.log('>> 객체 리터럴 생성');
const car = {
  name: 'Sonata',
  move() {
    console.log('한 칸 전진합니다.');
  },
};
console.log(car); // { name: 'Sonata', move: [Function: move] }
console.log(typeof car); // object

// 객체 리터럴이 비어있을 때
console.log('>> 빈 객체 리터럴 생성');
const empty = {};
console.log(empty); // {}
console.log(typeof empty); // object

// 프로퍼티 네이밍 규칙
console.log('>> 프로퍼티 네이밍 규칙');
const phone = {
  name: 'galaxy',
  'operating-system': 'android',
  // operating-system: 'android', // SyntaxError: Unexpected token '-'
};
console.log(phone); // { name: 'galaxy', 'operating-system': 'android' }

// 프로퍼티 동적 생성
console.log('>> 프로퍼티 동적 생성');
const cat = {
  name: '러시안 블루',
};
console.log(cat); // { name: '러시안 블루' }
// eslint-disable-next-line space-infix-ops, dot-notation
cat['type'] = '귀여움';
console.log(cat); // { name: '러시안 블루', type: '귀여움' }

// 프로퍼티 동적 생성(ES6)
console.log('>> 프로퍼티 키 동적 생성(ES6)');
const dog = {
  [`name${1 + 2}`]: '말티즈',
};
console.log(dog); // { name3: '말티즈' }

// 프로퍼티 중복 생성
console.log('>> 프로퍼티 중복 생성');
const foo = {
  bar: 1,
  bar: 2,
};
console.log(foo); // { bar: 2 }
