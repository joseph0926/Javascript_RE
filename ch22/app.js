const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

/* const userId = "messi";
const user = {
  name: "messi",
  age: 36,
  team: ["barcelona", "psg"],
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});
retrieveBtn.addEventListener("click", () => {
  const extractedId = localStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extractedId) {
    console.log("아이디: " + extractedId);
  } else {
    console.log("아이디를 찾을 수 없습니다");
  }
}); */

/* storeBtn.addEventListener("click", () => {
  const userId = "messi";
  const user = {
    name: "messi",
    age: 36,
    team: ["barcelona", "psg"],
  };
  document.cookie = `uid=${userId}; max-age=5`;
  // 오버라이드하는 것처럼 보이지만, 추가하는 작업을 수행한다
  // 쿠키는 웹페이자 실제 서버로 제공되는 경우에만 사용 가능
  // 쿠키의 특이점 중 하나는 쿠키 만료 기간을 설정할 수 있다는 점이다
  // 이때 사용하는 것이 max-age(초)와 expires(날짜)다.
  document.cookie = `user=${JSON.stringify(user)}`;
});
retrieveBtn.addEventListener("click", () => {
  console.log(document.cookie);
  // 저장된 모든 쿠키 데이터에 엑세스 한다.
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((cookie) => {
    return cookie.trim();
  });
  console.log(data);
  // 쿠기는 로컬스토리지처럼 단일 저장값을 얻는 메서드가 없는 대신, 모든 문자열 메서드를 활용할수있다
  console.log(data.includes("name").split("=")[1]);
  // 쿠키는 만료 기간이 존재하고, 만료 기간이 지나면 삭제되기때문에 인덱스로 접근하기보다는 키값으로 접근하는 것이 바람직하다
}); */

let db;
const dbReq = indexedDB.open("Dummy", 1);
// indexedDB를 사용하기 위해서는 DB를 만들거나, 기존의 DB에 연결해야한다
// open("DB이름", DB버전)

dbReq.onsuccess = (event) => {
  db = event.target.result;
};

dbReq.onupgradeneeded((event) => {
  db = event.target.result;
  // 만들어진 db에 접근한다
  const objStore = db.createObjectStore("products", { ketPath: "id" });
  // db에 객체 저장소를 생성할 수 있다
  // createObjectStore("객체 저장소 이름", {ketPath: "식별자"})
  objStore.transaction.oncomplete = (event) => {
    const productsStore = db.transaction("products", "readwrite").objectStore("products");
    // 객체 저장소 생성이 확인되면 데이터를 저장할 수 있게된다
    // transaction("객체 저장소 이름", "모드")
    productsStore.add({ id: "p1", title: "messi" });
  };
});
dbReq.onerror((event) => {
  return console.log("Error!");
});

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db.transaction("products", "readwrite").objectStore("products");
  productsStore.add({ id: "p1", title: "messi" });
});
retrieveBtn.addEventListener("click", () => {
  const productsStore = db.transaction("products", "readwrite").objectStore("products");
  const req = productsStore.get("p2");
  req.onsuccess = () => {
    console.log(req.result);
  };
});
// 이렇게 복잡한 indexedDB 저장소를 쉽게 처리할수있게 도와주는 라이브러리가 존재한다 => idb.js
