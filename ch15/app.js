const add = (n1, n2) => {
  return n1 + n2;
};
console.log(5, 7); // 12

const addRandom = (n) => {
  return n + Math.random();
};
console.log(5); // 결과가 그때그때 다르다

let previousResult = 0;
const addMoreNum = (n1, n2) => {
  const sum = n1 + n2;
  previousResult = sum;
  return sum;
};
console.log(addMoreNum(1, 2));
// previousResult = sum; 이부분이 부수효과를 일으킨다

const brca = ["Messi", "Pedri"];
const printBrca = (b) => {
  b.push("Dejong");
  console.log(b);
};
printBrca(brca);
// b.push("Dejong"); 이부분이 부수효과를 일으킨다

const calculateTax = (amount, tax) => {
  return amount * tax;
};
const someTax1 = calculateTax(100, 0.19);
const someTex2 = calculateTax(100, 0.25);

let dummy = 1.1;
const createTaxCalculator = (tax) => {
  const calculateTax = (amount) => {
    return amount * tax * dummy;
  };
  return calculateTax;
};
const someTax3 = createTaxCalculator(0.19);
const someTax4 = createTaxCalculator(0.25);
dummy = 1.2;
console.log(someTax3(100));
console.log(someTax3(200));

let userName = "Messi";
const greetUser = () => {
  console.log("Hi " + userName);
};
userName = "Pedri";
greetUser();

const powerOf = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

const powerOf2 = (x, n) => {
  if (n === 1) {
    return x;
  }
  return x * powerOf2(x, n - 1);
};

const mySelf = {
  name: "messi",
  friends: [
    {
      name: "pedri",
      friends: [
        {
          name: "dejong",
        },
      ],
    },
    {
      name: "gavi",
    },
  ],
};

const printFriendNames = (person) => {
  const collectedNames = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }
  return collectedNames;
};
console.log(printFriendNames(mySelf));
