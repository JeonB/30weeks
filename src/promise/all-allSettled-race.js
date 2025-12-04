new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
})
  .then(console.log('1초 지남'))
  .catch(console.error('error'));

// Promise.all에 넘기는 각 요소는 'Promise'여야 하며,
// (resolve, reject) => {...}는 단순 함수이므로 즉시 실행하지 않습니다.
// 원하는 값을 보려면 아래처럼 각 작업을 new Promise로 감싸주세요.
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 3000);
  }),
])
  .then(result => {
    // 모든 프로미스가 성공하면 결과 배열([1, 2, ...])이 출력됩니다.
    console.log('Promise.all result:', result);
  })
  .catch(error => {
    // 하나라도 실패(error 발생 시) 여기로 들어와서 error 메세지를 확인할 수 있습니다.
    console.error('Promise.all error:', error);
  });
