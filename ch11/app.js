class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Messi";

  constructor() {
    super();
    this.age = 36;
  }

  dummyFn() {
    console.log("name: " + this.name + "/ age: " + this.age);
  }
}

// ==========================================================

function Person2() {
  this.name = "Pedri";
  this.age = 20;
  this.dummyFn2 = function () {
    console.log("name: " + this.name + "/ age: " + this.age);
  };
}

Person2.prototype.printAge2 = function () {
  console.log(this.age);
};

console.dir(Person);
const p = new Person();
p.dummyFn();
p.printAge();
console.log("위의 코드 __proto__");
console.log(p.__proto__);
console.log("=========");

console.dir(Person2);
const p2 = new Person2();
p2.dummyFn2();
p2.printAge2();
console.log("아래 코드 __proto__");
console.log(p2.__proto__);
