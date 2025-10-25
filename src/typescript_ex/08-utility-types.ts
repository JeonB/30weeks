/* 기존 타입을 상황에 맞게 재활용하는 유틸리티 타입 */
type Champion = {
  name: string;
  role: string;
  ult: string;
  skin?: string;
  item: string[];
};

type APBuild = Partial<Champion>; // 일부 속성만 선택 가능
type MiniProfile = Pick<Champion, 'name' | 'role'>; // 필요한 정보만
type NoSkinChamp = Omit<Champion, 'skin'>; // 스킨 제외

const APEzreal: APBuild = {
  item: ['추억의 파랑 AP이즈', '무라마나', '얼건', '얼심'],
  skin: '서릿빛 이즈리얼',
};

const 나르: MiniProfile = { name: '나르', role: '탑' };
const 노스킨챔피언: NoSkinChamp = {
  name: '야스오',
  role: '미드',
  ult: '최후의 숨결',
  item: ['무대', '몰왕'],
};
