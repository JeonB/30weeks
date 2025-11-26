let reg = /^\d+$/;
let reg2 = /^\d+:$/;

function isNumberString(value: string) {
  return reg.test(value);
}

// console.log(isNumberString(123));
console.log(isNumberString('1242412412412423'));
console.log(reg2.test('12222:'));
