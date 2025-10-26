/* 타입스크립트는 타입을 정밀하게 추론하기 보다는 일반적으로 추론하게 되는데, 이 과정에서 타입의 범위가 넓어지기 때문에 Type Widening(타입 넓히기)라 한다. */
function returnString(string: 'a' | 'b' | 'c') {
  return string;
}

let a = 'a';
returnString(a); // string으로 자동 추론되서 타입 에러 발생
returnString('b');
returnString('c');
