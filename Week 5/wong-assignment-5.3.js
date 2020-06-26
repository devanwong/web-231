const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 5.3'))
/*
============================================
; Title:  Arrays Advanced js
; Author:  Devan Wong
; Date:   26 June 2020
; Modified By:
; Description: Object Collection
;===========================================
*/

//composers
var composers = [
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

//iterating through the object array to find the last name, genre and rating.
composers.forEach(function(composer){
  console.log(
    'Composer: ' + composer.lastName +
    ' Genre: ' + composer.genre +
    ' Rating:' + composer.rating)
});
