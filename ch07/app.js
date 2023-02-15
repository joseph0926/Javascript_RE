const title = document.getElementById("main-title");
let titleText = title.textContent;
const titleId = title.id;
const titleClassName = title.className;

console.log(titleText, titleId, titleClassName);
// 결과 => messi main-title messiClass

titleText = "pedri";

console.log(titleText);
// 결과 => pedri
