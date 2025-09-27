// 02. 함수 (Functions)
export function functions(): void {
  console.log('\n📚 02. 함수 학습');
  console.log('-------------------');

  // 1. 기본 함수 선언
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  console.log('기본 함수:', greet('TypeScript'));

  // 2. 화살표 함수
  const add = (a: number, b: number): number => {
    return a + b;
  };

  console.log('화살표 함수:', add(5, 3));

  // 3. 선택적 매개변수
  function createUser(name: string, age?: number): string {
    if (age) {
      return `${name} is ${age} years old`;
    }
    return `${name}'s age is not specified`;
  }

  console.log('선택적 매개변수:', createUser('Alice'));
  console.log('선택적 매개변수:', createUser('Bob', 30));

  // 4. 기본 매개변수
  function multiply(a: number, b: number = 1): number {
    return a * b;
  }

  console.log('기본 매개변수:', multiply(5));
  console.log('기본 매개변수:', multiply(5, 3));

  // 5. 나머지 매개변수
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log('나머지 매개변수:', sum(1, 2, 3, 4, 5));

  // 6. 함수 오버로딩
  function format(value: string): string;
  function format(value: number): string;
  function format(value: string | number): string {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value.toString();
  }

  console.log('함수 오버로딩:', format('hello'));
  console.log('함수 오버로딩:', format(42));

  // 7. 콜백 함수
  function processArray(
    numbers: number[],
    callback: (num: number) => number
  ): number[] {
    return numbers.map(callback);
  }

  const doubled = processArray([1, 2, 3, 4], (num) => num * 2);
  console.log('콜백 함수:', doubled);

  // 8. 고차 함수
  function createMultiplier(factor: number) {
    return (value: number) => value * factor;
  }

  const double = createMultiplier(2);
  const triple = createMultiplier(3);

  console.log('고차 함수:', double(5), triple(5));

  // 9. 비동기 함수
  async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data fetched!'), 100);
    });
  }

  // 10. 제네릭 함수
  function identity<T>(arg: T): T {
    return arg;
  }

  console.log('제네릭 함수:', identity<string>('Hello'));
  console.log('제네릭 함수:', identity<number>(42));

  // 11. 함수 타입
  type MathOperation = (a: number, b: number) => number;

  const operations: { [key: string]: MathOperation } = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };

  console.log('함수 타입:', operations?.['add']?.(10, 5));
}
