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

// 추가 사용 예시

// 1. 타입 가드 함수 예시
function isAdmin(account: User | Admin): account is Admin {
  return 'role' in account;
}
const user1: User = { name: '유저1', email: 'user1@domain.com' };
const admin1: Admin = { name: '관리자1', role: 'admin' };
console.log(isAdmin(user1)); // false
console.log(isAdmin(admin1)); // true

// 2. 배열에서 타입 내로잉 활용
const accounts: (User | Admin)[] = [
  { name: '토끼', email: 'tokki@domain.com' },
  { name: '거북이', role: 'admin' },
];
const admins = accounts.filter(isAdmin); // Admin[] 타입
admins.forEach(admin => {
  // admin.role 접근 가능
  console.log(`관리자만 출력: ${admin.name} / role: ${admin.role}`);
});

// 3. instanceof로 여러 타입 가능성 분기
const animals = [new Dog(), new Cat(), new Dog()];
const sounds = animals.map(pet => speak(pet));
console.log(sounds); // ['멍멍!', '야옹!', '멍멍!']
