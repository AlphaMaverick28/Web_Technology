//find largest element in an array
let arr = [10, 45, 23, 99, 5];

let largest = arr[0]; // assume first is largest

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("Largest element:", largest);