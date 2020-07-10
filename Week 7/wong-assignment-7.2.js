const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 7.2'))
 /*
============================================
; Title:   JavaScript in Web Browsers js
; Author: Devan Wong
; Date:  9 July 2020
; Modified By:
; Description: Constructor Functions
;===========================================
*/

//constructor function
//params: id, firstName, lastName, title
function Employee(id, firstName, lastName, title){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}
  // created 5 new objects.
const employees = [
  new Employee(1, 'Thomas', 'Edison', 'Software Engineer'),
  new Employee(2, 'Benjamin', 'Franklin', 'Programmer'),
  new Employee(3, 'Nikola', 'Tesla', 'Project Manager'),
  new Employee(4, 'Charles', 'Babbage', 'Product Manager'),
  new Employee(5, 'Alexander', 'Bell', 'Business Analyst')
];

// output
console.log('-- DISPLAYING A LIST OF EMPLOYEES --')
//iterating through employees obj.
let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + ' ' + employees[x].firstName + ' ' + employees[x].lastName + ' ' + employees[x].title)
  index++
}

// for (let x = 0; x < employees.length; x++) {
//   console.log(employees[x].id + ' ' + employees[x].firstName + ' ' + employees[x].lastName + ' ' + employees[x].title)
// }
