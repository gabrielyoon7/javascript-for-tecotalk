console.log('object-approach.js');

/**
 * 객체에 접근하는 법
 */

console.log('>> 객체에 접근하는 법');
const object = {
  foo: 'bar',
  age: 42,
  baz: { myProp: 12 },
};

console.log(object);
console.log(object.foo); // "bar"
// eslint-disable-next-line dot-notation
console.log(object['age']); // 42
console.log(object.baz); // {myProp: 12}
console.log(object.baz.myProp); // 12
