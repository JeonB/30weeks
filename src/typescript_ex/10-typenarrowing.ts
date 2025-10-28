/**
 * 타입 내로잉(Type Narrowing) 예제
 *
 * - 타입 가드(typeof, in, instanceof)를 사용해 유니언 타입을 구체적으로 좁히는 방법 시연
 */

// 1. typeof를 활용한 타입 내로잉
function printId(id: number | string) {
  if (typeof id === 'string') {
    // id는 string으로 좁혀짐
    console.log(`Your ID is: ${id.toUpperCase()}`);
  } else {
    // id는 number로 좁혀짐
    console.log(`Your ID is: ${id.toFixed(2)}`);
  }
}

// 2. in 연산자를 활용한 타입 내로잉
interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  role: 'admin';
}

// User 또는 Admin 타입을 받아서 role 여부로 타입을 좁힘
function getUserInfo(account: User | Admin) {
  if ('role' in account) {
    // account는 Admin으로 좁혀짐
    return `관리자: ${account.name}`;
  } else {
    // account는 User로 좁혀짐
    return `일반 사용자: ${account.name}`;
  }
}

// 3. instanceof를 활용한 타입 내로잉
class Dog {
  bark() {
    return '멍멍!';
  }
}
class Cat {
  meow() {
    return '야옹!';
  }
}
function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    return pet.bark();
  } else {
    return pet.meow();
  }
}

// 사용 예시
printId(1234); // "Your ID is: 1234.00"
printId('abcd'); // "Your ID is: ABCD"
console.log(getUserInfo({ name: '철수', email: 'a@a.com' })); // "일반 사용자: 철수"
console.log(getUserInfo({ name: '영희', role: 'admin' })); // "관리자: 영희"
console.log(speak(new Dog())); // "멍멍!"
console.log(speak(new Cat())); // "야옹!"
