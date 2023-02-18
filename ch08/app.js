/*
const numbers = new Array(1, 2);

const numbers2 = Array.of(1, 2);

const numbers3 = Array.from("Hi!");

const list = document.querySelectorAll("li");
console.log(list);
// 결과 => NodeList가 반환됨

const arrayItemList = Array.from(list);
console.log(arrayItemList);
// 결과 => 배열이 반환됨

const dummy = ["messi", "pedri"];
dummy.push("dejong");
dummy.unshift("xavi");
const dejong = dummy.pop();
dummy.shift();
dummy[1] = "gavi";
console.log(dummy);
console.log(dejong);

// 기존 dummy 배열 = ['messi', 'gavi']
dummy.splice(0, 0, "asdf");
console.log(dummy);
// 결과 => ['asdf', 'messi', 'gavi']
dummy.splice(0, 2, "qwer");
console.log(dummy);
// 결과 => ['qwer', 'gavi']
dummy.splice(1, 2, "zxcv");
console.log(dummy);
// 결과 => ['qwer', 'zxcv']
dummy.splice(1, 0, "poiu");
console.log(dummy);
// 결과 => ['qwer', 'poiu', 'zxcv']
*/

/*
const dummy = [1, 2, 3];
const copyDummy = dummy;
dummy.push(4);
console.log("기존배열: " + dummy + ", " + "복사배열: " + copyDummy);
// 결과 => 기존배열: 1,2,3,4, 복사배열: 1,2,3,4

const dummy2 = [1, 2, 3];
const copyDummy2 = dummy2.slice();
dummy2.push(4);
console.log("기존배열: " + dummy2 + ", " + "복사배열: " + copyDummy2);
// 결과 => 기존배열: 1,2,3,4, 복사배열: 1,2,3

const dummy3 = [1, 2, 3, 4, 5];
const copyDummy3 = dummy3.slice(1, 4);
console.log(copyDummy3);
// 결과 => [2, 3, 4]

const dummy4 = [1, 2, 3];
const testDummy = [10, 11, 12];
const copyDummy4 = dummy4.concat(testDummy);
console.log(copyDummy4);
// 결과 => [1, 2, 3, 10, 11, 12]
dummy4.push(4);
console.log("기존배열: " + dummy4 + ", " + "복사배열: " + copyDummy4);
// 결과 => 기존배열: 1,2,3,4, 복사배열: 1,2,3,10,11,12

const dummy5 = [1, 2, 3];
const dummyIndex = dummy5.indexOf(3);
console.log(dummyIndex);
// 결과 => 2

const dummy6 = [1, 2, 3, 4, 5];
const dummyIndex2 = dummy6.indexOf(1, 4);
console.log(dummyIndex2);
// 결과 => -1

const dummy7 = [1, 2, 3, 4, 5, 2, 3, 2, 2];
const dummyIndex3 = dummy7.indexOf(2);
console.log(dummyIndex3);
// 결과 => 1

const dummy8 = [1, 2, 3, 4, 5, 2, 3, 7, 8];
const dummyIndex4 = dummy8.lastIndexOf(2);
console.log(dummyIndex4);
// 결과 => 5

const dummy9 = [{ age: 20 }, { age: 30 }];
const dummyIndex5 = dummy9.indexOf({ age: 20 });
console.log(dummyIndex5);
// 결과 => -1

const dummy10 = [{ age: 20 }, { age: 30 }, { name: "messi" }];
const dummyIndex6 = dummy10.find((dummy, idx, dummys) => {
  return dummy.age === 30;
});
console.log(dummyIndex6);
// 결과 => { age: 30 }
dummyIndex6.age = 100;
console.log(dummy10);
//결과 => [{ age: 20 }, { age: 100 }, { name: "messi" }]
*/

/*
const itemPrice = [2500, 3200, 10900, 990];
const tax = 0.19;
const taxAdjustedPrice = [];
for (const price of itemPrice) {
  taxAdjustedPrice.push(price * (1 + tax));
}
console.log(taxAdjustedPrice);

taxAdjustedPrice.splice(0, taxAdjustedPrice.length);

itemPrice.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrice.push(priceObj);
});
console.log(taxAdjustedPrice);
*/

/*
const itemPrice = [2500, 3200, 10900, 990];
const tax = 0.19;
const taxAdjustedPrice = itemPrice.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});
console.log(taxAdjustedPrice);

console.log("기존배열: " + itemPrice);
const sortPrice = itemPrice.sort();
console.log("정렬배열: " + sortPrice);
*/

/*
const itemPrice = [2500, 3200, 10900, 990];
const tax = 0.19;
console.log("기존배열: " + itemPrice);
const sortPrice = itemPrice.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log("정렬배열: " + sortPrice);
*/

/*
const dummy = [1, 2, 3, 4, 5, 6];
const filterDummy = dummy.filter((d, idx, dummy) => {
  return d < 4;
});
console.log(filterDummy);
//결과 => [1, 2, 3]
*/

/*
const prices = [10.12, 20.99, 30, 9.99, 8.56];

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);
console.log(sum);
*/

/*
const data = "Hi;messi;10";
const transformedData = data.split(";");
console.log(transformedData);
// 결과 => ['Hi', 'messi', '10']

const data2 = ["Hi", "messi", 10];
const transformedData2 = data2.join("");
console.log(transformedData2);
// 결과 => Himessi10
*/

/*
const dummy = [1, 2, 3];
const copyDummy = [...dummy];
dummy.push(4);
console.log("기존배열: " + dummy + " / " + "복사배열: " + copyDummy);
// 결과 => 기존배열: 1,2,3,4 / 복사배열: 1,2,3

const minValue = Math.min(...dummy);
console.log(minValue);
// 결과 => 1

const dummy2 = [{ age: 30 }, { age: 20 }];
const copyDummy2 = [...dummy2];
dummy2.push({ age: 40 });
dummy2[0].age = 33;
console.log(dummy2, copyDummy2);
*/

const dummy = ["messi", "pedri", 1, { age: 30 }];
const [messi, pedri, ...otherInfo] = dummy;
console.log(messi, pedri, otherInfo);
