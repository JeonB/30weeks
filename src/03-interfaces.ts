// 03. 인터페이스 (Interfaces)
export function interfaces(): void {
  console.log('\n📚 03. 인터페이스 학습');
  console.log('-------------------');

  // 1. 기본 인터페이스
  interface Person {
    name: string;
    age: number;
    email?: string; // 선택적 속성
  }

  const person: Person = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  };

  console.log('기본 인터페이스:', person);

  // 2. 읽기 전용 속성
  interface Config {
    readonly apiUrl: string;
    readonly version: string;
    timeout: number;
  }

  const config: Config = {
    apiUrl: 'https://api.example.com',
    version: '1.0.0',
    timeout: 5000
  };

  // config.apiUrl = 'new-url'; // 에러: 읽기 전용 속성
  config.timeout = 3000; // 가능

  console.log('읽기 전용 속성:', config);

  // 3. 함수 타입 인터페이스
  interface SearchFunction {
    (source: string, subString: string): boolean;
  }

  const mySearch: SearchFunction = (src, sub) => {
    return src.indexOf(sub) > -1;
  };

  console.log('함수 타입 인터페이스:', mySearch('Hello World', 'World'));

  // 4. 인덱스 시그니처
  interface StringDictionary {
    [key: string]: string;
  }

  const dictionary: StringDictionary = {
    hello: '안녕하세요',
    goodbye: '안녕히 가세요',
    thank: '감사합니다'
  };

  console.log('인덱스 시그니처:', dictionary);

  // 5. 인터페이스 확장
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
    bark(): void;
  }

  const dog: Dog = {
    name: 'Buddy',
    age: 3,
    breed: 'Golden Retriever',
    bark() {
      console.log('Woof!');
    }
  };

  console.log('인터페이스 확장:', dog);
  dog.bark();

  // 6. 다중 인터페이스 확장
  interface Flyable {
    fly(): void;
  }

  interface Swimmable {
    swim(): void;
  }

  interface Duck extends Animal, Flyable, Swimmable {
    quack(): void;
  }

  const duck: Duck = {
    name: 'Donald',
    age: 2,
    fly() {
      console.log('Flying...');
    },
    swim() {
      console.log('Swimming...');
    },
    quack() {
      console.log('Quack!');
    }
  };

  console.log('다중 인터페이스 확장:', duck);
  duck.fly();
  duck.swim();
  duck.quack();

  // 7. 하이브리드 타입
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    const counter = (start: number) => `Started at ${start}`;
    counter.interval = 123;
    counter.reset = () => {
      console.log('Counter reset');
    };
    return counter;
  }

  const c = getCounter();
  console.log('하이브리드 타입:', c(10));
  console.log('하이브리드 타입:', c.interval);
  c.reset();

  // 8. 제네릭 인터페이스
  interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }

  interface User {
    id: number;
    name: string;
  }

  const userResponse: ApiResponse<User> = {
    data: { id: 1, name: 'John' },
    status: 200,
    message: 'Success'
  };

  console.log('제네릭 인터페이스:', userResponse);

  // 9. 조건부 타입과 인터페이스
  interface ConditionalExample<T> {
    value: T;
    isString: T extends string ? true : false;
  }

  const stringExample: ConditionalExample<string> = {
    value: 'Hello',
    isString: true
  };

  const numberExample: ConditionalExample<number> = {
    value: 42,
    isString: false
  };

  console.log('조건부 타입:', { stringExample, numberExample });

  // 10. 유틸리티 타입과 인터페이스
  interface FullUser {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
  }

  // Partial: 모든 속성을 선택적으로 만듦
  type PartialUser = Partial<FullUser>;

  // Pick: 특정 속성만 선택
  type PublicUser = Pick<FullUser, 'id' | 'name' | 'email'>;

  // Omit: 특정 속성을 제외
  type CreateUser = Omit<FullUser, 'id' | 'createdAt'>;

  const createUserData: CreateUser = {
    name: 'Jane',
    email: 'jane@example.com',
    password: 'secret'
  };

  console.log('유틸리티 타입:', createUserData);
}
