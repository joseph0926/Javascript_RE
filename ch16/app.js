/* console.log(Number.MAX_SAFE_INTEGER);
// 최대값 => 9007199254740991 (2^53 -1)
console.log(Number.MIN_SAFE_INTEGER);
// 최솟값 => -9007199254740991
console.log(Number.MAX_VALUE);
// 최대값 => 1.7976931348623157e+308
console.log(Number.MIN_VALUE);
// 최솟값 => 5e-324

console.log(Number.POSITIVE_INFINITY);
Number.NEGATIVE_INFINITY; */

const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const dummyFn = (string, pName, pPrice) => {
  let priceCategory = "cheep";
  if (pPrice > 20) {
    priceCategory = "fair";
  }
  return `${string[0]}${pName}${string[1]}${priceCategory}${string[2]}`;
};
const prodName = "Javascript";
const prodPrice = 29.99;
const dummyOutput = dummyFn`This product ${prodName} is $${prodPrice}!`;

const regex = /^\S+@\S+\.\S+$/;
