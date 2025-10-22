/* 유틸리티 타입 Record
기본 문법: Record<K, T>
객체의 키와 값의 타입을 명확히 정의할 때 유용
*/

type UserRole = 'admin' | 'user' | 'guest';

type RoleDescriptions = Record<UserRole, string>;

const roleText: RoleDescriptions = {
  admin: '관리자 권한이 있습니다.',
  user: '일반 사용자입니다.',
  guest: '로그인이 필요합니다.',
};
