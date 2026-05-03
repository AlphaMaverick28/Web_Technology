// diffreence bet arrow fun and simple fun(this keywords)
// write code for arrow fun with two examples
// switch case
// how to use truthy ansd false value 
// how to use ternary operators in js
//how to use loops in array
// difference for of and for in
// how to use map and filter function in js
//how to use reduce funtion in js


// switch case

// let chioce = 1;

// switch(chioce){
//   case 0:
//     day = "Sunday";
//     console.log("Day is:",day)
//     break;
//   case 1:
//     day = "Monday";
//     console.log("Day is:",day)
//     break;
//   case 2:
//      day = "Tuesday";
//      console.log("Day is:",day)
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log("Day is:",day)
//     break;
//   case 4:
//     day = "Thursday";
//     console.log("Day is:",day)
//     break;
//   case 5:
//     day = "Friday";
//     console.log("Day is:",day)
//     break;
//   case 6:
//     day = "Saturday";
//     console.log("Day is:",day)

// }

const dayOfWeek = new Date().getDay(); // getDay() returns a number from 0 (Sunday) to 6 (Saturday)
let message;

switch (dayOfWeek) {
    case 0:
        message = "Today is Sunday";
        break;
    case 1:
        message = "Today is Monday";
        break;
    case 2:
        message = "Today is Tuesday";
        break;
    case 3:
        message = "Today is Wednesday";
        break;
    case 4:
        message = "Today is Thursday";
        break;
    case 5:
        message = "Today is Friday";
        break;
    case 6:
        message = "Today is Saturday";
        break;
    default:
        message = "Unknown day";
}

console.log(message); // Example output: "Today is Wednesday" (depending on the current day)


// voting eligibility using ternary operator

let age = 20;

result = (age>18)? "eligible for voting" : "not eligible for voting"

console.log(result)

// diffreence bet arrow fun and simple fun(this keywords)
function multiply(a, b) {
    console.log("This is simple function")
  return a * b;
}

let result1 = multiply(4, 5);

console.log(result1)


// write code for arrow fun with two examples
//Example1
const add = (a, b) => {
  return a + b;
};
console.log(add(1,2))

//Example2
const hello = () => "Hello World!";
console.log(hello())

// Using Boolean() function
Boolean(0);       // false
Boolean("hello"); // true

// Using the double negation operator (!!)
console.log(!!null);           // false
console.log(!![]);             // true

let fruits2 = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]);
}

//  for...of → Values

// Used to loop through the values (elements) of an array or iterable objects like strings, maps, sets.

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:

// Apple
// Banana
// Mango

//  You directly get the value, not the index.

//  for...in → Keys / Index

// Used to loop through the keys (index or property names) of an object or array.

let fruits1 = ["Apple", "Banana", "Mango"];

for (let index in fruits1) {
    console.log(index);
}

// Output:

// 0
// 1
// 2

// If you want values using for...in:

for (let index in fruits1) {
    console.log(fruits1[index]);
}
// With Objects (Important)

// for...in is mainly used for objects.

let person = {
    name: "Om",
    age: 20,
    city: "Pune"
};

for (let key in person) {
    console.log(key + " : " + person[key]);
}

// Output:

// name : Om
// age : 20
// city : Pune

// for...of  does NOT work directly on objects.


// Array of numbers
let numbers = [10, 15, 20, 25, 30];

// 1. Using map() to get squares
let squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// 2. Using filter() to get even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// 3. Using reduce() to get sum
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// 4. Using loop to print all numbers
console.log("Using Loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
