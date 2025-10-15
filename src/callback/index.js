function main(callback) {
  callback('John');
}

function hi(name) {
  console.log(`Hello, ${name}!`);
}

main(hi);

function greetToUser(greet) {
  const name = 'John';
  greet(name);
}

function greetInKorean(name) {
  console.log(`안녕하세요, ${name}!`);
}

function greetInEnglish(name) {
  console.log(`Hello, ${name}!`);
}

greetToUser(greetInKorean);
greetToUser(greetInEnglish);
