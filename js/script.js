'use strick';

let numberOfFilms;
    
function start() {
    numberOfFilms = +prompt('How many films have wached already?', '');

    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How many films have wached already?', '');
    }
}

start();

const personalMoviesDB = {
          count: numberOfFilms,
          movies: {},
          actors: {},
          genres: [],
          privat: false
      };

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a1 = prompt('One of the last wached films?', ''),
        a2 = prompt('How much will his?', '');
        if(a1 != null && a2 != null && a1 != '' && a2 != '' && a1.length < 50) {
            personalMoviesDB.movies[a1] = a2;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevl() {
    if(personalMoviesDB.count < 10) {
        console.log('Посмотрено мало фильмов');
    }else if(personalMoviesDB.count >= 10 || personalMoviesDB < 30){
        console.log('You are good viewer');
    }else if(personalMoviesDB.count >= 30) {
        console.log('Вы киноман');
    }else {
        console.log('Error!');
    }
}

detectPersonalLevl();

function showMovieDB() {
    if(!personalMoviesDB.privat){
        console.log(personalMoviesDB);
    }else{
        console.log('Sorry. It is privat DB');
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        let yourGenre = prompt(`What is your favorite genre number ${i + 1}`, '');
        if(yourGenre != null && yourGenre != '') {
            personalMoviesDB.genres.push(yourGenre);
            console.log('Ok!');
        }else{
            console.log('Error!');
            i--;
        }
    }
}

writeYourGenres();
showMovieDB();