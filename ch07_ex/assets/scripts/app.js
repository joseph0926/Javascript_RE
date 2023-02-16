const modal = document.getElementById("add-modal");
const addButton = document.querySelector(".add_btn");
const backdrop = document.getElementById("backdrop");
const cancleModalBtn = document.querySelector(".btn--passive");
const addMovieBtn = document.querySelector(".btn--success");
const inputs = document.querySelectorAll("input");
const dummyTextBox = document.getElementById("entry-text");

const movies = [];

const removeMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};

const movieListHandler = (id, title, imgUrl, rate) => {
  const movieList = document.createElement("li");
  movieList.className = "movie-element";
  movieList.innerHTML = `
    <div class="movie-element__image>
      <img src="${imgUrl}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rate}</p>
    </div>
  `;
  movieList.addEventListener("click", removeMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(movieList);
};

const updateUI = () => {
  if (movies.length === 0) {
    dummyTextBox.style.display = "block";
  } else {
    dummyTextBox.style.display = "none";
  }
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
    id: Math.random().toString(),
    title: title,
    imgUrl: imgUrl,
    rate: rate,
  };
  movies.push(newMovie);
  console.log(movies);

  clearInput();
  removeModalHandler();
  movieListHandler(newMovie.id, newMovie.title, newMovie.imgUrl, newMovie.rate);
  updateUI();
};

addButton.addEventListener("click", toggleModalHandler);
backdrop.addEventListener("click", removeModalHandler);
cancleModalBtn.addEventListener("click", removeModalHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
