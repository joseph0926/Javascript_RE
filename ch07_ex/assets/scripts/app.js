const modal = document.getElementById("add-modal");
const addButton = document.querySelector(".add_btn");
const backdrop = document.getElementById("backdrop");
const cancleModalBtn = document.querySelector(".btn--passive");
const addMovieBtn = document.querySelector(".btn--success");
const inputs = document.querySelectorAll("input");
const dummyTextBox = document.getElementById("entry-text");

const movies = [];

const movieListHandler = () => {
  const movieList = document.createElement("li");
  for (const movie of movies) {
    movieList.className = "movie-element";
    movieList.innerHTML = `
      <div class="movie-element__image">
        <img src=${movie.imgUrl}>
      </div>
      <div class="movie-element__info">
        <h2>${movie.title}</h2>
        <p>${movie.rate}</p>
      </div>
    `;
  }
};

const updateUI = () => {
  if (movies.length === 0) {
    dummyTextBox.style.display = "block";
  } else {
    dummyTextBox.style.display = "none";
  }
  movieListHandler();
};

const toggleBackdropHandler = () => {
  backdrop.classList.toggle("visible");
};
const toggleModalHandler = () => {
  modal.classList.toggle("visible");
  toggleBackdropHandler();
};
const removeModalHandler = () => {
  backdrop.classList.remove("visible");
  modal.classList.remove("visible");
  clearInput();
};

const clearInput = () => {
  for (const input of inputs) {
    input.value = "";
  }
};

const addMovieHandler = () => {
  const title = inputs[0].value;
  const imgUrl = inputs[1].value;
  const rate = inputs[2].value;
  if (title.trim() === "" || imgUrl.trim() === "" || rate.trim() === "" || parseInt(rate) < 1 || parseInt(rate) > 5) {
    alert("유효하지 않은 값입니다.");
    return;
  }

  const newMovie = {
    title: title,
    imgUrl: imgUrl,
    rate: rate,
  };
  movies.push(newMovie);
  console.log(movies);

  clearInput();
  removeModalHandler();
  updateUI();
};

addButton.addEventListener("click", toggleModalHandler);
backdrop.addEventListener("click", removeModalHandler);
cancleModalBtn.addEventListener("click", removeModalHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
