const numberOfFilms = +prompt('How many films have wached already?', '0'),
      personalMoviesDB = {
          count: numberOfFilms,
          movies: {},
          actors: {},
          genres: [],
          privat: false
      };

let a1 = prompt('One of the last wached films?', ''),
    a2 = prompt('How much will his?', ''),
    a3 = prompt('One of the last wached films?', ''),
    a4 = prompt('How much will his?', '');

personalMoviesDB.movies[a1] = a2;
personalMoviesDB.movies[a3] = a4;

console.log(personalMoviesDB);