# TypeScript 기본기 학습 프로젝트

TypeScript의 기본 개념부터 고급 기능까지 체계적으로 학습할 수 있는 프로젝트입니다.

## 📚 학습 내용

### 1. 기본 타입 (Basic Types)
- 원시 타입 (string, number, boolean, null, undefined)
- 배열과 튜플
- 열거형 (Enum)
- Any, Unknown, Void, Never 타입
- 타입 단언과 리터럴 타입

### 2. 함수 (Functions)
- 함수 선언과 화살표 함수
- 선택적/기본 매개변수
- 나머지 매개변수
- 함수 오버로딩
- 콜백과 고차 함수
- 비동기 함수
- 제네릭 함수

### 3. 인터페이스 (Interfaces)
- 기본 인터페이스
- 읽기 전용 속성
- 함수 타입 인터페이스
- 인덱스 시그니처
- 인터페이스 확장
- 하이브리드 타입
- 제네릭 인터페이스

### 4. 클래스 (Classes)
- 기본 클래스와 상속
- 접근 제어자 (public, private, protected)
- 추상 클래스
- 정적 멤버
- 게터와 세터
- 인터페이스 구현
- 제네릭 클래스
- 믹스인과 데코레이터

### 5. 제네릭 (Generics)
- 기본 제네릭 함수
- 제네릭 인터페이스와 클래스
- 제네릭 제약 조건
- keyof 제약 조건
- 조건부 타입
- 매핑된 타입
- 템플릿 리터럴 타입
- 재귀적 타입

### 6. 고급 타입 (Advanced Types)
- 유니온과 교차 타입
- 리터럴 타입
- 타입 가드
- 인덱스 시그니처
- 매핑된 타입 고급 사용법
- 조건부 타입 고급
- 템플릿 리터럴 타입 고급
- 재귀적 타입 고급
- 브랜드 타입
- 네버 타입 활용

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 모드 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

### 4. 실행
```bash
npm start
```

## 📝 사용 가능한 스크립트

- `npm run build` - TypeScript 컴파일
- `npm run dev` - 개발 모드 (watch 모드)
- `npm start` - 컴파일된 JavaScript 실행
- `npm run clean` - 빌드 결과물 삭제
- `npm run lint` - ESLint 검사
- `npm run lint:fix` - ESLint 자동 수정
- `npm run format` - Prettier 포맷팅

## 🛠️ 개발 환경 설정

### TypeScript 설정
- `strict` 모드 활성화
- 엄격한 타입 검사 옵션들 활성화
- 소스맵과 선언 파일 생성

### ESLint 설정
- TypeScript 전용 규칙 적용
- 코드 품질 향상을 위한 규칙들
- 학습용으로 console.log 허용

### Prettier 설정
- 일관된 코드 스타일 적용
- 2칸 들여쓰기
- 세미콜론 사용
- 작은따옴표 사용

## 📁 프로젝트 구조

```
30weeks/
├── src/
│   ├── index.ts              # 메인 진입점
│   ├── 01-basic-types.ts     # 기본 타입 학습
│   ├── 02-functions.ts       # 함수 학습
│   ├── 03-interfaces.ts      # 인터페이스 학습
│   ├── 04-classes.ts         # 클래스 학습
│   ├── 05-generics.ts        # 제네릭 학습
│   └── 06-advanced-types.ts  # 고급 타입 학습
├── dist/                     # 컴파일 결과물
├── tsconfig.json            # TypeScript 설정
├── .eslintrc.js             # ESLint 설정
├── .prettierrc              # Prettier 설정
└── package.json             # 프로젝트 설정
```

## 🎯 학습 방법

1. 각 파일을 순서대로 읽어보세요
2. 코드를 실행해보고 결과를 확인하세요
3. 주석을 참고하여 각 개념을 이해하세요
4. 코드를 수정해보며 실험해보세요
5. TypeScript 공식 문서와 함께 학습하세요

## 📖 추가 학습 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Effective TypeScript](https://effectivetypescript.com/)

## 🤝 기여하기

이 프로젝트는 학습 목적으로 만들어졌습니다. 개선 사항이나 추가 예제가 있다면 언제든 기여해주세요!

## 📄 라이선스

ISC License
