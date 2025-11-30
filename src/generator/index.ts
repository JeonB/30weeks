//여러개의 값을 반환(yield)하는 함수
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
// '제너레이터 함수'는 '제너레이터 객체'를 생성합니다.
console.log(generateSequence());

let generator = generateSequence();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//for..of 이터레이션이 done: true일 때 마지막 value를 무시
for (let value of generator) {
  console.log(value); // 1, 2가 출력됨
}

function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3; // yield로 변경해야 마지막 값 반환
}

let generator2 = generateSequence2();
for (let value of generator2) {
  console.log(value); // 1, 2, 3 출력됨
}

let range = {
  from: 1,
  to: 5,

  // for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
  [Symbol.iterator]() {
    // Symbol.iterator는 이터레이터 객체를 반환합니다.
    // for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
    return {
      current: this.from,
      last: this.to,

      // for..of 반복문에 의해 각 이터레이션마다 next()가 호출됩니다.
      next() {
        // next()는 객체 형태의 값, {done:.., value :...}을 반환해야 합니다.
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// 객체 range를 대상으로 하는 이터레이션은 range.from과 range.to 사이의 숫자를 출력합니다.
alert([...range]);

let range2 = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // [Symbol.iterator]: function*()를 짧게 줄임
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

alert([...range2]); // 1, 2, 3, 4, 5
