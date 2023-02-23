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

/* const sucLocationCB = (curData) => {
  console.log(curData);
};
const errLocationCB = (errorData) => {
  setTimer(1000).then((data) => {
    console.log(data);
    console.log(errorData);
  });
}; */

/* const dummyFn = () => {
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
}; */

const dummyFn2 = async () => {
  try {
    const timeData = await setTimer(2000);
  } catch (error) {
    console.log(erro);
  }
  console.log(timeData);
};

const getPosition = navigator.geolocation.getCurrentPosition();

const dummyFn = () => {
  let positionData;
  getPosition().then();
};

button.addEventListener("click", dummyFn);

/* let result = 0;
for (let i = 0; i < 100000000; i++) {
  result += i;
}
console.log(result); */

const dummy = (num) => {
  const innerDummy = (innerNum) => {
    console.log("내부함수");
    return num + innerNum;
  };
  console.log("외부함수");
  return innerDummy;
};
const someDummy = dummy(5);
console.log(someDummy(10));
