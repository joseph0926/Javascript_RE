const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("프로미스");
    }, duration);
  });
  return promise;
};

const sucLocationCB = (curData) => {
  console.log(curData);
};
const errLocationCB = (errorData) => {
  setTimer(1000).then((data) => {
    console.log(data);
    console.log(errorData);
  });
};

const dummyFn = () => {
  navigator.geolocation.getCurrentPosition(sucLocationCB, errLocationCB);
  setTimer(0).then(() => {
    console.log("이건 언제 실행될까...?");
  });
  console.log("기다리는중......");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  console.log(result);
};

button.addEventListener("click", dummyFn);

/* let result = 0;
for (let i = 0; i < 100000000; i++) {
  result += i;
}
console.log(result); */
