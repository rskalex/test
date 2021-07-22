// const numberOfFilms = +prompt('How many films have wached already?', '0'),
//       personalMoviesDB = {
//           count: numberOfFilms,
//           movies: {},
//           actors: {},
//           genres: [],
//           privat: false
//       };

// let a1 = prompt('One of the last wached films?', ''),
//     a2 = prompt('How much will his?', ''),
//     a3 = prompt('One of the last wached films?', ''),
//     a4 = prompt('How much will his?', '');

// personalMoviesDB.movies[a1] = a2;
// personalMoviesDB.movies[a3] = a4;

// console.log(personalMoviesDB);


let n = 10;
a:
for (let i = 2; i <= n; i++) {
    for(let j = 2; j < i; j++) {
        if(i % j == 0) {
            continue a;
        }
    }
    console.log(i)
}


