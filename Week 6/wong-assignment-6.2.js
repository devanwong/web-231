const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 6.2'))
/*
============================================
; Title:  Objects js
; Author: Devan Wong
; Date:  2 July 2020
; Modified By:
; Description: Exception Handling
;===========================================
*/

//checking to see if the number is odd or even using modulus.
try {

  var x = 5;
  var y = 2;
  var z = x % y;

if (z == 1) throw "Number is odd";

    console.log(z + ' even number');

} catch (err) { //if statement true catch error runs.

    console.log("Catch clause: " + err);

} finally { //end of try/catch

    console.log("Finally clause reached...");

}
