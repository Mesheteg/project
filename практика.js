/* jshint -W097 */
"use strict";



let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Кол-во фильмов", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Кол-во фильмов", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};







function rememberMyFilms() {
    for (let i=0; i < 2; i++ ) {
        const a = prompt("Один из фильмов", ""),
          b = prompt("На сколько оцените его?", "");
        
    
        if(a != null && b !=null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }
    
    }
}

// rememberMyFilms();



function detectPersnalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("malo filmov");
    } else if (10 <= personalMovieDB.count <= 30) {
        console.log("nomano filmov");
    } else if (personalMovieDB.count > 30) {
        console.log("you are kinoman");
    } else {
        console.log("ошибка");
    }
}

// detectPersnalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
}  

writeYourGenres();

console.log(personalMovieDB);
