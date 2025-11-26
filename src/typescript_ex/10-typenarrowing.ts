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

// 4. 사용자 정의 타입가드로 유니언 타입 분기
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function isCircle(shape: Shape): shape is { kind: 'circle'; radius: number } {
  return shape.kind === 'circle';
}
function getArea(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    // Shape narrowed to { kind: 'square'; side: number }
    return shape.side * shape.side;
  }
}

const shapes: Shape[] = [
  { kind: 'circle', radius: 5 },
  { kind: 'square', side: 10 },
];
shapes.forEach(shape => console.log(`넓이: ${getArea(shape)}`));

// 5. null/undefined 체크 예시 (truthy narrowing)
function printLength(str?: string | null) {
  if (str) {
    console.log(`문자열 길이: ${str.length}`);
  } else {
    console.log('값이 없습니다.');
  }
}
printLength('Hello TypeScript'); // 16
printLength(); // 값이 없습니다.

// 6. typeof 타입 가드 예시
function doubleValue(value: string | number) {
  if (typeof value === 'number') {
    return value * 2;
  }
  return value.repeat(2);
}
console.log(doubleValue(10)); // 20
console.log(doubleValue('Hi')); // HiHi

// 7. in 연산자를 활용한 프로퍼티 존재 검사
type Person = { name: string; age: number };
type Company = { company: string; employeeCount: number };

function printEntity(entity: Person | Company) {
  if ('name' in entity) {
    console.log(`사람: ${entity.name}, 나이: ${entity.age}`);
  } else {
    console.log(`회사: ${entity.company}, 직원수: ${entity.employeeCount}`);
  }
}
printEntity({ name: '홍길동', age: 29 });
printEntity({ company: 'MindLighthouse', employeeCount: 50 });

// 8. 배열에서 유니언 타입 아이템 내로잉 예시
const values: (number | string | boolean)[] = [1, 'a', true, 3, 'b', false];
const strings = values.filter((v): v is string => typeof v === 'string');
console.log('문자열만:', strings); // ["a", "b"]

// 9. 타입 내로잉 + 타입 별 응답 분기
function describe(input: string | Date | number) {
  if (typeof input === 'string') {
    return `문자열: ${input.toUpperCase()}`;
  }
  if (typeof input === 'number') {
    return `숫자: ${input.toLocaleString()}`;
  }
  // input 타입이 Date로 내로잉 됨
  return `날짜: ${input.toISOString().slice(0, 10)}`;
}
console.log(describe('hello'));
console.log(describe(123456));
console.log(describe(new Date('2024-01-01')));
