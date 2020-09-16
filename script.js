const numberOfFilms = +prompt("Кол-во фильмов", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt("Один из фильмов", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из фильмов", ""),
      d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)