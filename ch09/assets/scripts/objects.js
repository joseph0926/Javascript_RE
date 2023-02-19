/* const userInput = prompt();

const person = {
  name: "messi",
  num: 10,
  age: 36,
  dummy: () => {
    alert("messi");
  },
  [userInput]: 123,
};
person.team = "PSG";
person.num = 30;

console.log(person);

delete person.team;

console.log(person["name"]);
// or
const number = "num";
console.log(person[number]);
//결과 => messi
 */

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovie = () => {
  const list = document.getElementById("movie-list");

  if (movies.length === 0) {
    list.classList.remove("visible");
  } else {
    list.classList.add("visible");
  }
  list.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    movieEl.textContent = movie.info.title;
    list.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };

  movies.push(newMovie);
  renderMovie();
};

addMovieBtn.addEventListener("click", addMovieHandler);
