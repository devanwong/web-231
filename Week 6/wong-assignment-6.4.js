const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 6.4'))
/*
============================================
; Title:  Objects js
; Author: Devan Wong
; Date:  4 July 2020
; Modified By:
; Description: Nested Object Literals
;===========================================
*/

const ticket = {
  id: 105,
  name: 'QA Bugs',
  dateCreated: new Date(),
  //nested obj
  person: {
    id: 105,
    firstName: 'Bob',
    lastName: 'Jones',
    jobTitle: 'Programmer I'
  },
  get fullPerson(){
    return this.person.firstName + ' ' + this.person.lastName + ' (' + this.person.jobTitle + ')';
  }
}
//OUTPUT
//  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated.toDateString()
+ ' and assigned to employee ' + ticket.fullPerson
)
