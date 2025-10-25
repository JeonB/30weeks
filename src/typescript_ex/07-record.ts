/* 유틸리티 타입 Record
기본 문법: Record<K, T>
객체의 키와 값의 타입을 명확히 정의할 때 유용
*/

type Admin = 'super' | 'admin';
type CommonUser = 'researcher' | 'user' | 'guest';
type UserRole = Admin | CommonUser;

type RoleDescriptions = Partial<Record<UserRole, string>>;

const roleText: RoleDescriptions = {
  admin: '관리자 권한이 있습니다.',
  user: '일반 사용자입니다.',
  guest: '로그인이 필요합니다.',
};

//값 타입을 객체로 지정
type UserRole2 = 'admin' | 'user' | 'guest';

interface RoleInfo {
  label: string;
  permissions: string[];
}

const roles: Record<UserRole2, RoleInfo> = {
  admin: { label: '관리자', permissions: ['read', 'write', 'delete'] },
  user: { label: '사용자', permissions: ['read', 'write'] },
  guest: { label: '게스트', permissions: ['read'] },
};

enum Status {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Fail = 'FAIL',
}

const statusMessage: Record<Status, string> = {
  [Status.Pending]: '처리 중입니다.',
  [Status.Success]: '성공했습니다!',
  [Status.Fail]: '실패했습니다.',
};

type Lang = 'ko' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  ko: {
    welcome: '환영합니다',
    logout: '로그아웃',
  },
  en: {
    welcome: 'Welcome',
    logout: 'Logout',
  },
};

function createMap<K extends string, T>(
  keys: K[],
  defaultValue: T
): Record<K, T> {
  return keys.reduce(
    (acc, key) => {
      acc[key] = defaultValue;
      return acc;
    },
    {} as Record<K, T>
  );
}

const colors = createMap(['primary', 'secondary', 'danger'], '#000');

// 결과
//   {
//     primary: "#000",
//     secondary: "#000",
//     danger: "#000"
//   }

/* Record + Partial */
type Status2 = 'pending' | 'success' | 'fail'; // 3개 키 모두 필요

const result: Partial<Record<Status2, string>> = {
  success: '성공했습니다!',
};

interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User; // "name" | "age" | "email"

// Pick으로 name, email만 매핑
type UserContactMap = Record<Pick<UserKeys, 'name' | 'email'>, string>; // ❌ 오류 (Pick은 타입임)

// 🔧 이렇게 써야 합니다:
type UserContactMap = Record<'name' | 'email', string>;

const contact: UserContactMap = {
  name: '홍길동',
  email: 'test@example.com',
};
