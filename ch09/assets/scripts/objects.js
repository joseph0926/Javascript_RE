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

const renderMovie = (filter = "") => {
  const list = document.getElementById("movie-list");

  if (movies.length === 0) {
    list.classList.remove("visible");
  } else {
    list.classList.add("visible");
  }
  list.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(filter);
      });

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie;
    const { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
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
    getFormattedTitle: function () {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovie();
};

const searchMovieHandler = () => {
  const filterInput = document.getElementById("filter-title").value;
  renderMovie(filterInput);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
