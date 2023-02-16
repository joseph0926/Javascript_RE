const title = document.getElementById("main-title");
let titleText = title.textContent;
const titleId = title.id;
const titleClassName = title.className;

console.log(titleText, titleId, titleClassName);
// 결과 => messi main-title messiClass

titleText = "pedri";

console.log(titleText);
// 결과 => pedri

/* const section = document.querySelector("section");
section.style.backgroundColor = "red"; */

const section = document.querySelector("section");
const btn = document.querySelector("button");

section.className = "red-bg";

btn.addEventListener("click", () => {
  section.classList.toggle("invisible");
});

const itemLi = document.querySelectorAll("li");
console.log(itemLi);

const itemLi2 = document.getElementsByTagName("li");
console.log(itemLi2);

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
ul.appendChild(newLi);

console.log(itemLi);
console.log(itemLi2);
