const btn = document.querySelector("button");

const url = "https://dummyjson.com/products/1";

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
