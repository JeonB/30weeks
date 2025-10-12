function main(callback) {
  callback('John');
}

function hi(name) {
  console.log(`Hello, ${name}!`);
}

main(hi);
