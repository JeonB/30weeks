// 01. 기본 타입 (Basic Types)
export function basicTypes(): void {
  console.log('\n📚 01. 기본 타입 학습');
  console.log('-------------------');

  // 1. 원시 타입 (Primitive Types)
  const name: string = 'TypeScript';
  const age: number = 30;
  const isLearning: boolean = true;
  const nothing: null = null;
  const notDefined: undefined = undefined;

  console.log('원시 타입:', { name, age, isLearning, nothing, notDefined });

  // 2. 배열 타입
  const numbers: number[] = [1, 2, 3, 4, 5];
  const names: Array<string> = ['Alice', 'Bob', 'Charlie'];

  console.log('배열 타입:', { numbers, names });

  // 3. 튜플 (Tuple)
  const person: [string, number] = ['John', 25];
  const coordinates: [number, number] = [10, 20];

  console.log('튜플:', { person, coordinates });

  // 4. 열거형 (Enum)
  enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
  }

  const favoriteColor: Color = Color.Blue;
  console.log('열거형:', { favoriteColor });

  // 5. Any 타입 (가능한 한 피해야 함)
  let dynamicValue: any = 42;
  dynamicValue = 'Hello';
  dynamicValue = true;

  console.log('Any 타입:', { dynamicValue });

  // 6. Unknown 타입 (Any보다 안전)
  let userInput: unknown = 'Hello World';
  if (typeof userInput === 'string') {
    console.log('Unknown 타입 (string):', userInput.toUpperCase());
  }

  // 7. Void 타입
  function logMessage(message: string): void {
    console.log('Void 함수:', message);
  }
  logMessage('Hello TypeScript!');

  // 8. Never 타입
  function throwError(message: string): never {
    throw new Error(message);
  }

  // 9. 타입 단언 (Type Assertion)
  const someValue: unknown = 'Hello TypeScript';
  const strLength: number = (someValue as string).length;
  console.log('타입 단언:', { strLength });

  // 10. 리터럴 타입
  const direction: 'up' | 'down' | 'left' | 'right' = 'up';
  const status: 'loading' | 'success' | 'error' = 'success';

  console.log('리터럴 타입:', { direction, status });
}
