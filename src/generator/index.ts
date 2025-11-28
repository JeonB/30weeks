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
