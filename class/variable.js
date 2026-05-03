/* •	Difference between var, let, and const 

var a=10;
var a=20; // re declaration allowed
a=30;     // re-assignment allowed
console.log(a);

let b=10;
// let b=20;  re-declaration not allowed
b=30;       // re-assignment allowed
console.log(b);

const c=10;
// const c=20; re-declaration not allowed
// c=30;   re-assignment allowed 
console.log(c);
*/


/* •	Types of data: Primitive & Non-Primitive 

let num = 10;                    // Number
let name = "Atharv";            // String
let isActive = true;            // Boolean
let x;                          // Undefined
let y = null;                   // Null
let id = Symbol("id");          // Symbol
let bigNum = 12345678901234567890n; // BigInt

console.log(num);
console.log(name);
console.log(isActive);
console.log(x);
console.log(y);
console.log(id);
console.log(bigNum);

// non primitive 

let numbers = [10, 20, 30]; // array 
console.log(numbers);

let student={
    name:"Atharv",   // object
    age:20
}
console.log("Name :",student.name);
console.log("Age :",student.age);

function greet() {
  console.log("Hello!");   // function 
}
greet();

*/

/* Declare variables of different data types & Check their type using typeof


let num = 10;                  // Number
let name = "Atharv";          // String
let isStudent = true;         // Boolean
let x;                        // Undefined
let y = null;                 // Null
let bigNum = 1234567890123n;  // BigInt

console.log(num, typeof num);
console.log(name, typeof name);
console.log(isStudent, typeof isStudent);
console.log(x, typeof x);
console.log(y, typeof y);         
console.log(bigNum, typeof bigNum);

*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove first company
companies.shift();

// Replace Uber with Ola
companies.splice(1, 2, "Ola");

// Add Amazon at end
companies.push("Amazon");

console.log(companies);









