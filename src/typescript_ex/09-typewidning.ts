/* 타입스크립트는 타입을 정밀하게 추론하기 보다는 일반적으로 추론하게 되는데, 이 과정에서 타입의 범위가 넓어지기 때문에 Type Widening(타입 넓히기)라 한다. */
function returnString(string: 'a' | 'b' | 'c') {
  return string;
}

let a = 'a';
returnString(a); // string으로 자동 추론되서 타입 에러 발생
returnString('b');
returnString('c');
// 1. let/const 타입 추론 차이
let x = 5; // x: number (5가 아닌 number로 widening)
const y = 5; // y: 5 (literal type 유지)

// 2. 객체 literal widening
let obj = { value: 'hello' }; // obj: { value: string }
function takeHello(v: 'hello') {}
// takeHello(obj.value); // 에러: obj.value는 string이라고 추론됨

// 3. boolean widening
let flag = true; // flag: boolean (true literal 아님)
function onlyTrue(v: true) {}
// onlyTrue(flag); // 에러: flag는 boolean

// 4. 배열 widening
let arr = [1, 2, 3]; // arr: number[] (1|2|3 아님)
const arr2 = [1, 2, 3] as const; // arr2: readonly [1, 2, 3]

// 5. 함수 파라미터 widening
function foo(x = 'abc') {
  // x: string
  return x;
}
// foo('abc'); // OK, foo(123); // 에러

// 6. 함수의 반환값 widening
function returnsHello() {
  return 'hello';
}
const h = returnsHello(); // h: string (not 'hello')
// 7. null과 undefined widening
let n = null; // n: any (초기값만 있으면 any 타입이 할당됨)
let u = undefined; // u: any

// 8. let과 const의 함수 타입 추론 차이
let compute = () => 123; // compute: () => number
const computeConst = () => 123; // computeConst: () => number (함수 반환값은 narrowing 안됨)

// 9. template literal widening
let suffix = 'world';
let greet = `hello ${suffix}`; // greet: string (literal widening)
const greetConst = `hello world`; // greetConst: "hello world"

// 10. symbol widening
let sym = Symbol('test'); // sym: symbol
const symConst = Symbol('test'); // symConst: symbol (symbol 자체는 literal type 없음)

// 11. 함수 default parameter widening
function hoge(s = 'hi') {
  // s: string (not 'hi')
  return s;
}
const h1 = hoge(); // h1: string
