const numberOfFilms = +prompt("Кол-во фильмов", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





// for (let i=0; i < 2; i++ ) {
//     const a = prompt("Один из фильмов", ""),
//       b = prompt("На сколько оцените его?", "");
    

//     if(a != null && b !=null && a !='' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("Error");
//         i--;
//     }

// }
if (personalMovieDB.count < 10) {
    console.log("malo filmov");
} else if (10 <= personalMovieDB.count <= 30) {
    console.log("nomano filmov");
} else if (personalMovieDB.count > 30) {
    console.log("you are kinoman");
} else {
    console.log("ошибка");
}

    
console.log(personalMovieDB);

let i = 0;
while (i<2){
    const a = prompt("Один из фильмов", ""),
        b = prompt("На сколько оцените его?", "");
    i++;
    if(a != null && b !=null && a !='' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("Error");
        i--;
    }
    
}
