'use strict';

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вас есть 18?", "18");
// console.log(typeof(answer+5));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия ?', '');
// answers[2] = prompt('Как вам лет?', '');

// document.write(answers);


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// console.log(4+ +"5");

// let incr = 10, 
//     decr = 10;

//     incr++;
//     decr--;

//     console.log(incr);
//     console.log(decr);

//     console.log(5%2);

//     console.log(2*4 === 8);

// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');

// const personalMovieDB={
//     count: numberOfFilms,
//     movies: {},
//     actors:{},
//     genres:[],
//     privat: false

// };


// for(let i = 0; i<2; i++){
//     const   a = prompt("Один из последних просмотренных фильмов",""),
//             b = prompt("На сколько оцените его?","");
//         if(a!=null && b!= null && a != '' && b!='' && a.length<50){
//             personalMovieDB.movies[a] = b;
//             console.log("Done");
//         }
//         else{
//             console.log("error");
//             i--;
//         }
       
// }
// if(personalMovieDB.count<10){
//     console.log("мало фильмов");
// }else if(personalMovieDB.count>=10&& personalMovieDB.count<30){
//     console.log("класический зритель");

// }else if(personalMovieDB.count>=30){
//     console.log("вы киноман");
// }else{
//     console.log("произошла ошибка");
// }

// console.log(personalMovieDB);


// showFirstMessage("hello world");

// let num = 20;
// function showFirstMessage(text ){
//     console.log(text);
//     num = 20;
// }
//  console.log(num);

//  function calc(a,b){
//      return(a+b);
//  }

//  console.log(calc(4,3));
//  console.log(calc(5,6));
//  console.log(calc(10,3));


// function ret(){
//     let num=50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
//     console.log("hello");

// };

// logger();

// const calc = (a,b) => {return a+b };


// const str = "test";

// console.log(str.toUpperCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6));

// console.log(logg.substring(6));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));



let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');

    while(numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');
    }
}

start();



const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false

};
function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const   a = prompt("Один из последних просмотренных фильмов",""),
                b = prompt("На сколько оцените его?","");
            if(a!=null && b!= null && a != '' && b!='' && a.length<50){
                personalMovieDB.movies[a] = b;
                console.log("Done");
            }
            else{
                console.log("error");
                i--;
            }
           
    }
}
rememberMyFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("мало фильмов");
    }else if(personalMovieDB.count>=10&& personalMovieDB.count<30){
        console.log("класический зритель");
    
    }else if(personalMovieDB.count>=30){
        console.log("вы киноман");
    }else{
        console.log("произошла ошибка");
    }
}
detectPersonalLevel();
function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGeners(){
    for(let i=1; i<=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}` );
    }
}
writeYourGeners();
