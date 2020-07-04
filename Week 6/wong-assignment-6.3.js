const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 63'))
/*
============================================
; Title:  Objects js
; Author: Devan Wong
; Date:  4 July 2020
; Modified By:
; Description: Object Literals
;===========================================
*/

//creating an object literal, that have three properties and a getter/setter
var person = {
  //default values
  id: 801,
  name: 'Developer',
  requestor: 'Devan Wong',
  //get to display all properties
  get fullPerson(){
    return "id: " + this.id + " name: " + this.name + " requestor: " + this.requestor;
  },
  //set to alter all properties
  set fullPerson(val){
    this.fullPerson = val;
  }
}

// console.log('Before:');
// console.log(person.fullPerson);

//alterations to match github
person.id = 101;
person.name = 'Help Desk Support';
person.requestor = 'Bob Jones';

//OUTPUT of new values
//console.log('After set:')
console.log(person.fullPerson);
