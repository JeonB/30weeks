// 04. 클래스 (Classes)
export function classes(): void {
  console.log('\n📚 04. 클래스 학습');
  console.log('-------------------');

  // 1. 기본 클래스
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    speak(): void {
      console.log(`${this.name} makes a sound`);
    }

    getInfo(): string {
      return `${this.name} is ${this.age} years old`;
    }
  }

  const animal = new Animal('Generic Animal', 5);
  console.log('기본 클래스:', animal.getInfo());
  animal.speak();

  // 2. 상속
  class Dog extends Animal {
    breed: string;

    constructor(name: string, age: number, breed: string) {
      super(name, age);
      this.breed = breed;
    }

    override speak(): void {
      console.log(`${this.name} barks: Woof!`);
    }

    override getInfo(): string {
      return `${super.getInfo()} and is a ${this.breed}`;
    }
  }

  const dog = new Dog('Buddy', 3, 'Golden Retriever');
  console.log('상속:', dog.getInfo());
  dog.speak();

  // 3. 접근 제어자
  class BankAccount {
    private balance: number;
    protected accountNumber: string;
    public owner: string;

    constructor(owner: string, accountNumber: string, initialBalance: number = 0) {
      this.owner = owner;
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
    }

    public deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
      }
    }

    public withdraw(amount: number): boolean {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        return true;
      }
      console.log('Insufficient funds');
      return false;
    }

    public getBalance(): number {
      return this.balance;
    }
  }

  const account = new BankAccount('John Doe', '123456789', 1000);
  console.log('접근 제어자:', account.owner);
  account.deposit(500);
  account.withdraw(200);
  console.log('현재 잔액:', account.getBalance());

  // 4. 추상 클래스
  abstract class Shape {
    protected color: string;

    constructor(color: string) {
      this.color = color;
    }

    abstract getArea(): number;
    abstract getPerimeter(): number;

    getColor(): string {
      return this.color;
    }
  }

  class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
      super(color);
      this.width = width;
      this.height = height;
    }

    getArea(): number {
      return this.width * this.height;
    }

    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }

  const rectangle = new Rectangle('red', 10, 5);
  console.log('추상 클래스:', {
    color: rectangle.getColor(),
    area: rectangle.getArea(),
    perimeter: rectangle.getPerimeter()
  });

  // 5. 정적 멤버
  class MathUtils {
    static readonly PI = 3.14159;

    static add(a: number, b: number): number {
      return a + b;
    }

    static multiply(a: number, b: number): number {
      return a * b;
    }

    static circleArea(radius: number): number {
      return this.PI * radius * radius;
    }
  }

  console.log('정적 멤버:', {
    pi: MathUtils.PI,
    sum: MathUtils.add(5, 3),
    product: MathUtils.multiply(4, 6),
    circleArea: MathUtils.circleArea(5)
  });

  // 6. 게터와 세터
  class Temperature {
    private _celsius: number = 0;

    get celsius(): number {
      return this._celsius;
    }

    set celsius(value: number) {
      if (value < -273.15) {
        throw new Error('Temperature cannot be below absolute zero');
      }
      this._celsius = value;
    }

    get fahrenheit(): number {
      return (this._celsius * 9) / 5 + 32;
    }

    set fahrenheit(value: number) {
      this.celsius = ((value - 32) * 5) / 9;
    }
  }

  const temp = new Temperature();
  temp.celsius = 25;
  console.log('게터와 세터:', {
    celsius: temp.celsius,
    fahrenheit: temp.fahrenheit
  });

  // 7. 인터페이스 구현
  interface Flyable {
    fly(): void;
    altitude: number;
  }

  interface Swimmable {
    swim(): void;
    depth: number;
  }

  class Duck implements Flyable, Swimmable {
    altitude: number = 0;
    depth: number = 0;

    fly(): void {
      this.altitude = 100;
      console.log('Duck is flying at', this.altitude, 'meters');
    }

    swim(): void {
      this.depth = 5;
      console.log('Duck is swimming at', this.depth, 'meters deep');
    }
  }

  const duck = new Duck();
  duck.fly();
  duck.swim();

  // 8. 제네릭 클래스
  class Container<T> {
    private items: T[] = [];

    add(item: T): void {
      this.items.push(item);
    }

    get(index: number): T | undefined {
      return this.items[index];
    }

    getAll(): T[] {
      return [...this.items];
    }

    size(): number {
      return this.items.length;
    }
  }

  const stringContainer = new Container<string>();
  stringContainer.add('Hello');
  stringContainer.add('World');
  console.log('제네릭 클래스:', stringContainer.getAll());

  const numberContainer = new Container<number>();
  numberContainer.add(1);
  numberContainer.add(2);
  numberContainer.add(3);
  console.log('제네릭 클래스:', numberContainer.getAll());

  // 9. 믹스인 (Mixin)
  type Constructor = new (...args: any[]) => {};

  function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      timestamp = new Date();
    };
  }

  function Loggable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      log(message: string): void {
        console.log(`[${new Date().toISOString()}] ${message}`);
      }
    };
  }

  class User {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  const TimestampedLoggableUser = Timestamped(Loggable(User));
  const user = new TimestampedLoggableUser('Alice');
  console.log('믹스인:', {
    name: user.name,
    timestamp: user.timestamp
  });
  user.log('User created');

  // 10. 데코레이터 (실험적 기능)
  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  @sealed
  class SealedClass {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  const sealedInstance = new SealedClass('Sealed');
  console.log('데코레이터:', sealedInstance.name);
}
