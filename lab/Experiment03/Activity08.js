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