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

try {

  var x = 5;
  var y = 2;
  var z = x % y;

if (z == 1) throw "Number is odd";

    console.log(z);

} catch (err) {

    console.log("Catch clause: " + err);

} finally {

    console.log("Finally clause reached...");

}
