const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 5.2'))
/*
============================================
; Title:  Arrays Advanced js
; Author:  Devan Wong
; Date:   25 June 2020
; Modified By:
; Description: Figuring out for each
;===========================================
*/

//array with 5 of my favorite foods.
let foods = ['pizza', 'pad thai', 'french fries', 'avocados', 'hot cheetos'];

//built in forEach to iterate the array
foods.forEach(function(food){
  console.log(food);
})
