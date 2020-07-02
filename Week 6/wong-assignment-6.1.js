const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 6.1'))
/*
============================================
; Title:  Objects js
; Author: Devan Wong
; Date:  2 July 2020
; Modified By:
; Description: Objects and built in objects [ 2 errors ]
;===========================================
*/

var topSecret = {
  firstName: 'Devan',
  lastName : 'Wong',
  birthday: 'November 7, 1990',
  get: fullProfile() {
    return topSecret.firstName + ' ' + topSecret.lastName + ' ' + topSecret.birthday
  }
}
Object.defineProperty(topsecret, 'SSN', {
  value: '123-234-1234',
  writable: true,
  configurable: true,
  enumerable: true
});

for (let value in topSecret) {
  console.log(topSecret[value]);
}

//OUT THE SSN SHOULD NOT BE SHOWN.
