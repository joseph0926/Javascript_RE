/* const dummyFn = () => {
  console.log("add messi"); //1
  console.log("messi start!"); //2
  setTimeout(() => {
    console.log("messi done..."); //4
    console.log("pedri start!"); //5
    setTimeout(() => {
      console.log("pedri done.."); //7
      console.log("dejong start!"); //8
      setTimeout(() => {
        console.log("dejong done..."); //9
      }, 2000);
    }, 5000);
    console.log("add dejong"); //6
  }, 10000);
};

dummyFn();
console.log("add pedri"); //3 */

/* const messi = document.querySelector(".one");
const pedri = document.querySelector(".two");
const dejong = document.querySelector(".three");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  setTimeout(() => {
    pedri.style.color = "red";
  }, 1000);
}); */

/* const messi = document.querySelector(".one");
const pedri = document.querySelector(".two");
const dejong = document.querySelector(".three");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let isValid = false;
  if (isValid) {
    resolve("성공!");
  } else {
    reject("실패ㅠ");
  }
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* const btn = document.querySelector("button");
const imgContainer = document.querySelector(".img");

const url = "https://source.unsplash.com/random";

const loadImg = (url) => {
  const promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("Error!"));
    });
    img.src = url;
  });
  return promise;
};

btn.addEventListener("click", () => {
  loadImg(url)
    .then((data) => {
      console.log(data);
      imgContainer.append(data);
    })
    .catch((err) => {
      console.log(err);
    });
}); */

/* const messi = document.querySelector(".one");
const pedri = document.querySelector(".twoo");
const dejong = document.querySelector(".three");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  addColor(1000, messi, "red")
    .then((data) => {
      console.log(data);
      addColor(2000, pedri, "green");
    })
    .then((data) => {
      console.log(data);
      addColor(2000, dejong, "blue");
    })
    .catch((err) => {
      console.log(err);
    });
});

const addColor = (time, element, color) => {
  const promise = new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error("Error!!!!!!"));
    }
  });
  return promise;
};
 */

const messi = document.querySelector(".one");
const pedri = document.querySelector(".two");
const dejong = document.querySelector(".three");

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  displayColor().then((data) => {
    console.log(data);
  });
});

const displayColor = async () => {
  try {
    await addColor(1000, messi, "red");
    await addColor(2000, pedri, "green");
    await addColor(1000, dejong, "blue");
  } catch (error) {
    console.log(error);
  }
};

const addColor = (time, element, color) => {
  const promise = new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve("성공!");
      }, time);
    } else {
      reject(new Error("Error!!!!!!"));
    }
  });
  return promise;
};
