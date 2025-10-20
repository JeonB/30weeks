function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () =>
    callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

  document.head.append(script);
}

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () =>
      reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

    document.head.append(script);
  });
}

// executer 역할은 Promise 생성자 함수에 전달된 콜백 함수
// 실행 결과에 따라 내부 프라퍼티인 state, result 값이 결정됨
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  // 무시됨
  setTimeout(() => resolve(2), 1000);
});
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('에러 발생!')), 1000);
});
promise.then(console.log); // 작업이 성공적으로 처리된 경우만 다루고 싶은 경우 인수 하나만 전달
promise.then(
  result => console.log(result),
  error => console.log(error) // 무시됨
);

promise2.then(
  result => console.log(result), // 무시됨
  error => console.log(error)
);
promise2.catch(console.log); // catch는 then에 null을 전달하는 것과 동일
promise2.then(null, console.log); // catch는 then에 null을 전달하는 것과 동일

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('결과'), 2000);
});

promise3
  .finally(() => console.log('프라미스가 준비되었습니다.'))
  .then(result => console.log(result)); // <-- .then에서 result를 다룰 수 있음

promise2
  .finally(() => alert('프라미스가 준비되었습니다.'))
  .catch(err => alert(err)); // <-- .catch에서 에러 객체를 다룰 수 있음
