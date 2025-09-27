// 05. 제네릭 (Generics)
export function generics(): void {
  console.log('\n📚 05. 제네릭 학습');
  console.log('-------------------');

  // 1. 기본 제네릭 함수
  function identity<T>(arg: T): T {
    return arg;
  }

  console.log('기본 제네릭:', {
    string: identity<string>('Hello'),
    number: identity<number>(42),
    boolean: identity<boolean>(true)
  });

  // 2. 제네릭 인터페이스
  interface GenericResponse<T> {
    data: T;
    status: number;
    message: string;
  }

  interface User {
    id: number;
    name: string;
    email: string;
  }

  const userResponse: GenericResponse<User> = {
    data: { id: 1, name: 'John', email: 'john@example.com' },
    status: 200,
    message: 'Success'
  };

  console.log('제네릭 인터페이스:', userResponse);

  // 3. 제네릭 클래스
  class GenericStack<T> {
    private items: T[] = [];

    push(item: T): void {
      this.items.push(item);
    }

    pop(): T | undefined {
      return this.items.pop();
    }

    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
      return this.items.length === 0;
    }

    size(): number {
      return this.items.length;
    }
  }

  const numberStack = new GenericStack<number>();
  numberStack.push(1);
  numberStack.push(2);
  numberStack.push(3);

  console.log('제네릭 클래스:', {
    size: numberStack.size(),
    peek: numberStack.peek(),
    pop: numberStack.pop()
  });

  // 4. 제네릭 제약 조건
  interface Lengthwise {
    length: number;
  }

  function logLength<T extends Lengthwise>(arg: T): T {
    console.log(`Length: ${arg.length}`);
    return arg;
  }

  console.log('제네릭 제약 조건:', {
    string: logLength('Hello'),
    array: logLength([1, 2, 3, 4, 5])
  });

  // 5. keyof 제약 조건
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person = { name: 'Alice', age: 30, city: 'Seoul' };
  console.log('keyof 제약 조건:', {
    name: getProperty(person, 'name'),
    age: getProperty(person, 'age')
  });

  // 6. 조건부 타입
  type NonNullable<T> = T extends null | undefined ? never : T;

  type Example1 = NonNullable<string | null>; // string
  type Example2 = NonNullable<number | undefined>; // number

  function processValue<T>(value: T): NonNullable<T> {
    if (value === null || value === undefined) {
      throw new Error('Value cannot be null or undefined');
    }
    return value as NonNullable<T>;
  }

  console.log('조건부 타입:', processValue('Hello'));

  // 7. 매핑된 타입
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  type Required<T> = {
    [P in keyof T]-?: T[P];
  };

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  interface UserProfile {
    id: number;
    name: string;
    email: string;
    age: number;
  }

  type PartialUser = Partial<UserProfile>;
  type RequiredUser = Required<PartialUser>;
  type ReadonlyUser = Readonly<UserProfile>;

  const partialUser: PartialUser = { name: 'John' };
  const requiredUser: RequiredUser = {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    age: 30
  };

  console.log('매핑된 타입:', { partialUser, requiredUser });

  // 8. 템플릿 리터럴 타입
  type EventName<T extends string> = `on${Capitalize<T>}`;

  type ClickEvent = EventName<'click'>; // 'onClick'
  type ChangeEvent = EventName<'change'>; // 'onChange'

  interface EventHandlers {
    onClick: () => void;
    onChange: () => void;
    onFocus: () => void;
  }

  const handlers: EventHandlers = {
    onClick: () => console.log('Clicked'),
    onChange: () => console.log('Changed'),
    onFocus: () => console.log('Focused')
  };

  console.log('템플릿 리터럴 타입:', handlers);

  // 9. 재귀적 타입
  type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

  const jsonData: JSONValue = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding'],
    address: {
      city: 'Seoul',
      country: 'Korea'
    }
  };

  console.log('재귀적 타입:', jsonData);

  // 10. 고급 제네릭 패턴
  type Flatten<T> = T extends (infer U)[] ? U : T;

  type StringArray = string[];
  type FlattenedString = Flatten<StringArray>; // string

  type NumberType = number;
  type FlattenedNumber = Flatten<NumberType>; // number

  function flatten<T>(array: T[]): Flatten<T>[] {
    return array.flat() as Flatten<T>[];
  }

  const nestedArray = [[1, 2], [3, 4], [5, 6]];
  const flattened = flatten(nestedArray);
  console.log('고급 제네릭 패턴:', flattened);

  // 11. 제네릭 유틸리티 함수
  function createArray<T>(length: number, value: T): T[] {
    return Array(length).fill(value);
  }

  function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
  }

  function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  console.log('제네릭 유틸리티 함수:', {
    array: createArray(3, 'Hello'),
    swap: swap(['Hello', 42]),
    merge: merge({ name: 'John' }, { age: 30 })
  });

  // 12. 제네릭과 오버로딩
  function process<T extends string>(input: T): T;
  function process<T extends number>(input: T): T;
  function process<T>(input: T): T {
    return input;
  }

  console.log('제네릭과 오버로딩:', {
    string: process('Hello'),
    number: process(42)
  });
}
