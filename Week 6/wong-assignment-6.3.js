const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 6.3'))
/*
============================================
; Title:  Objects js
; Author: Devan Wong
; Date:  4 July 2020
; Modified By:
; Description: Object Literals
;===========================================
*/

//creating an object literal, that have three properties and a getter/setter method
const ticket = {
  //default values
  id: 801,
  name: 'Developer',
  requestor: 'Devan Wong',
  //get to display all properties
  get fullTicket(){
    return "id: " + this.id + " name: " + this.name + " requestor: " + this.requestor;
  },
  //set to alter all properties
  set fullTicket(val){
    this.fullTicket = val;
  }
}

// console.log('Before:');
// console.log(ticket.fullTicket);

//alterations to match github
ticket.id = 101;
ticket.name = 'Help Desk Support';
ticket.requestor = 'Bob Jones';

//OUTPUT of new values
//console.log('After set:')
console.log(ticket.fullTicket);
