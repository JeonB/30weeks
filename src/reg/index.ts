let reg = /^\d+$/;
let reg2 = /^\d+:$/;

function isNumberString(value: string) {
  return reg.test(value);
}

// console.log(isNumberString(123));
console.log(isNumberString('1242412412412423'));
console.log(reg2.test('12222:'));

let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

let reg3 = /^\d/gm;
// let reg3 = /^\d/g;
console.log(str.match(reg3));

let str2 = `domino pizza 1
burger king 2
kfc 3`;
let reg4 = /\d$/gm;
console.log(str2.match(reg4));

let reg5 = /\d\n/gm;
console.log(str2.match(reg5));

let reg6 = /ads$/g;
let str3 = 'qqqqadss';
console.log(reg6.test(str3));
console.log(str3.match(reg6));
