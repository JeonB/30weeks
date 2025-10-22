// 06. 고급 타입 (Advanced Types)
export function advancedTypes(): void {
  console.log('\n📚 06. 고급 타입 학습');
  console.log('-------------------');

  // 1. 유니온 타입 (Union Types)
  type StringOrNumber = string | number;

  function processValue(value: StringOrNumber): string {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value.toString();
  }

  console.log('유니온 타입:', {
    string: processValue('hello'),
    number: processValue(42)
  });

  // 2. 교차 타입 (Intersection Types)
  interface Person {
    name: string;
    age: number;
  }

  interface Employee {
    employeeId: string;
    department: string;
  }

  type PersonEmployee = Person & Employee;

  const personEmployee: PersonEmployee = {
    name: 'John',
    age: 30,
    employeeId: 'EMP001',
    department: 'Engineering'
  };

  console.log('교차 타입:', personEmployee);

  // 3. 리터럴 타입
  type Theme = 'light' | 'dark';
  type Size = 'small' | 'medium' | 'large';
  type Status2 = 'loading' | 'success' | 'error';

  function createButton(theme: Theme, size: Size): string {
    return `Button: ${theme} theme, ${size} size`;
  }

  console.log('리터럴 타입:', createButton('dark', 'large'));

  // 4. 타입 가드 (Type Guards)
  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  function processUnknown(value: unknown): string {
    if (isString(value)) {
      return value.toUpperCase();
    }
    if (isNumber(value)) {
      return value.toString();
    }
    return 'Unknown type';
  }

  console.log('타입 가드:', {
    string: processUnknown('hello'),
    number: processUnknown(42),
    other: processUnknown(true)
  });

  // 5. 인덱스 시그니처
  interface StringDictionary {
    [key: string]: string;
  }

  interface NumberDictionary {
    [key: string]: number;
    length: number; // OK, length는 number 타입
    // name: string; // 에러: string은 number에 할당할 수 없음
  }

  const stringDict: StringDictionary = {
    hello: 'world',
    foo: 'bar'
  };

  console.log('인덱스 시그니처:', stringDict);

  // 6. 매핑된 타입 고급 사용법
  type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

  interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }

  type UserWithoutPassword = Optional<User, 'password'>;

  const user: UserWithoutPassword = {
    id: 1,
    name: 'John',
    email: 'john@example.com'
    // password는 선택적
  };

  console.log('매핑된 타입 고급:', user);

  // 7. 조건부 타입 고급
  type ApiResponse<T> = T extends string
    ? { message: T }
    : T extends number
    ? { count: T }
    : { data: T };

  type StringResponse = ApiResponse<string>; // { message: string }
  type NumberResponse = ApiResponse<number>; // { count: number }
  type ObjectResponse = ApiResponse<{ id: number }>; // { data: { id: number } }

  console.log('조건부 타입 고급:', {
    stringResponse: { message: 'Hello' } as StringResponse,
    numberResponse: { count: 42 } as NumberResponse,
    objectResponse: { data: { id: 1 } } as ObjectResponse
  });

  // 8. 템플릿 리터럴 타입 고급
  type EventName<T extends string> = `on${Capitalize<T>}`;
  type CSSProperty<T extends string> = `--${T}`;

  type ClickEvent = EventName<'click'>; // 'onClick'
  type CustomProperty = CSSProperty<'primary-color'>; // '--primary-color'

  interface EventMap {
    onClick: () => void;
    onChange: () => void;
    onFocus: () => void;
  }

  const eventMap: EventMap = {
    onClick: () => console.log('Clicked'),
    onChange: () => console.log('Changed'),
    onFocus: () => console.log('Focused')
  };

  console.log('템플릿 리터럴 타입 고급:', eventMap);

  // 9. 재귀적 타입 고급
  type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
  };

  type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };

  interface NestedObject {
    level1: {
      level2: {
        level3: {
          value: string;
        };
      };
    };
  }

  type ReadonlyNested = DeepReadonly<NestedObject>;
  type PartialNested = DeepPartial<NestedObject>;

  const nested: NestedObject = {
    level1: {
      level2: {
        level3: {
          value: 'deep value'
        }
      }
    }
  };

  console.log('재귀적 타입 고급:', nested);

  // 10. 브랜드 타입 (Branded Types)
  type Brand<T, B> = T & { __brand: B };

  type UserId = Brand<number, 'UserId'>;
  type ProductId = Brand<number, 'ProductId'>;

  function createUserId(id: number): UserId {
    return id as UserId;
  }

  function createProductId(id: number): ProductId {
    return id as ProductId;
  }

  function getUserById(id: UserId): string {
    return `User ${id}`;
  }

  const userId = createUserId(123);
  const productId = createProductId(456);

  console.log('브랜드 타입:', getUserById(userId));
  // console.log(getUserById(productId)); // 에러: ProductId는 UserId에 할당할 수 없음

  // 11. 네버 타입 활용
  type NonEmptyArray<T> = [T, ...T[]];

  function getFirst<T>(array: NonEmptyArray<T>): T {
    return array[0];
  }

  function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
  }

  type Status = 'loading' | 'success' | 'error';

  function handleStatus(status: Status2): string {
    switch (status) {
      case 'loading':
        return 'Loading...';
      case 'success':
        return 'Success!';
      case 'error':
        return 'Error!';
      default:
        return assertNever(status); // 모든 케이스를 처리했는지 확인
    }
  }

  console.log('네버 타입 활용:', {
    first: getFirst([1, 2, 3]),
    status: handleStatus('success')
  });

  // 12. 고급 유틸리티 타입
  type NonNullable<T> = T extends null | undefined ? never : T;
  type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
  }[keyof T];

  interface Example {
    name: string;
    age: number;
    greet: () => void;
    calculate: (x: number) => number;
  }

  type FunctionNames = FunctionPropertyNames<Example>; // 'greet' | 'calculate'

  const example: Example = {
    name: 'John',
    age: 30,
    greet: () => console.log('Hello'),
    calculate: (x) => x * 2
  };

  console.log('고급 유틸리티 타입:', {
    functionNames: ['greet', 'calculate'] as FunctionNames[],
    example
  });
}
