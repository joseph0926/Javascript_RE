const button = document.querySelector("button");

const buttonClickHandler = (event) => {
  console.log(event);
};

button.addEventListener("click", buttonClickHandler);

/* setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000); */

/* 무한 스크롤 예시

let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);
*/
const submitHandler = (event) => {
  event.preventDefault();
};
