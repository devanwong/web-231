const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 5.3'))
/*
============================================
; Title:  Arrays Advanced js
; Author:  Devan Wong
; Date:   26 June 2020
; Modified By:
; Description: Filtering/Reducing Complex Data Structures
;===========================================
*/

//composers obj collection
const composers = [
  {
    firstName: 'Frank',
    lastName: 'Ocean',
    genre: 'Contemporary R&B',
    rating: 10
  },
  {
    firstName: 'Bob',
    lastName: 'Marley',
    genre: 'Reggae',
    rating: 6
  },
  {
    firstName: 'Lady',
    lastName: 'Gaga',
    genre: 'Pop',
    rating: 4
  },
  {
    firstName: 'Carrie',
    lastName: 'Underwood',
    genre: 'Country',
    rating: 6
  },
  {
    firstName: 'Kanye',
    lastName: 'West',
    genre: 'Rap',
    rating: 7
  }
];
//filtering out only the ratings from each ojb.
let ratings = composers.map((composer) => {
  return 'Rating: ' + composer.rating + '\n' + 'Composer: ' + composer.lastName
});
//filtering out only the genres from each ojb.
let genres = composers.map((composer) => {
  return 'Genre: ' + composer.genre + '\n' + 'Composer: ' + composer.lastName
});

console.log(' ');

//iterating through the obj array outputting rating with composer
console.log('-- COMPOSER BY RATING --')
ratings.forEach(function(rating) {
  console.log(rating + '\n');
});

console.log(' ');
//iterating through the obj array outputting genre with composer
console.log('-- COMPOSER BY GENRE --')
genres.forEach(function(genre) {
  console.log(genre + '\n');
});
