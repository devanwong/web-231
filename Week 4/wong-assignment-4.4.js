const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 4.3'))
/*
============================================
; Title:  Predicates js
; Author:  Devan Wong
; Date:   20 June 2020
; Modified By:
; Description: Filtering our word problems.
;===========================================
*/

//string array 5 states
const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//FUNCTION to see if the arguments match
function getState(str1, str2){
  return str1 === str2
}

//OUTPUT ORIGINAL ARRAY
console.log("");
console.log("-- ORIGINAL ARRAY --");
//For loop iterating the states array.
for(let i = 0; i < states.length; i++) {
  console.log(states[i]);
}

//OUTPUT SORTED ARRAY
console.log("");
console.log("-- SORTED ARRAY --");
//Sorting the array and alphabetizing them
let statesSort = states.sort();
for(let i = 0; i < statesSort.length; i++) {
  console.log(statesSort[i]);
}

//OUTPUT SELECTED VALUE
console.log("");
console.log("-- Selected Value --");
//Filtering the array to ensure our given arg is inside the orginal array.
 let statesMatch = states.filter
   (
     function(str1) {
       return getState (str1, "Iowa")
     }
   )[0];
 console.log(statesMatch);
