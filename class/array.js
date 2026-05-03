
// Functions (basic)


// normal function
function add(a, b) {
  return a + b;
}
console.log("Add:", add(5, 3));

// arrow function
const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(4, 2));




// Array creation


let numbers = [10, 20, 30, 40, 50];
let names = ["A", "B", "C"];

console.log(numbers);
console.log(names);




// Add / Remove elements


numbers.push(60);       // add at end
numbers.pop();         // remove from end

numbers.unshift(5);    // add at start
numbers.shift();       // remove from start

console.log("After push/pop/unshift/shift:", numbers);




// Access & modify


console.log("First element:", numbers[0]);
numbers[1] = 25;
console.log("Modified:", numbers);



// Length


console.log("Length:", numbers.length);




// Searching


console.log("includes 30:", numbers.includes(30));
console.log("Index of 40:", numbers.indexOf(40));




// Slice & Splice


let part = numbers.slice(1, 4);   // does NOT change original
console.log("Slice:", part);

numbers.splice(2, 1, 99);         // changes original
console.log("Splice:", numbers);




// Looping methods


// forEach (just iterate)
numbers.forEach(n => console.log("forEach:", n));

// map (transform)
let doubled = numbers.map(n => n * 2);
console.log("map:", doubled);

// filter (select)
let greaterThan30 = numbers.filter(n => n > 30);
console.log("filter:", greaterThan30);

// reduce (combine)
let sum = numbers.reduce((total, n) => total + n, 0);
console.log("reduce sum:", sum);




// Sorting


let marks = [45, 12, 89, 34];
marks.sort((a, b) => a - b); // ascending
console.log("Sorted:", marks);




// Join & Split


let str = names.join("-");
console.log("Join:", str);

let arr = str.split("-");
console.log("Split:", arr);




// Practice Examples


// 1. Find max number
let nums = [3, 9, 2, 7];
let max = Math.max(...nums);
console.log("Max:", max);

// 2. Remove even numbers
let odds = nums.filter(n => n % 2 !== 0);
console.log("Odds:", odds);

// 3. Square all values
let squares = nums.map(n => n * n);
console.log("Squares:", squares);

// 4. Total of array
let total = nums.reduce((t, n) => t + n, 0);
console.log("Total:", total);

// 5. Random element
let randomElement = nums[Math.floor(Math.random() * nums.length)];
console.log("Random Element:", randomElement);
