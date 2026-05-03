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

for (let index in fruits) {
    console.log(index);
}

// Output:

// 0
// 1
// 2

// If you want values using for...in:

for (let index in fruits) {
    console.log(fruits[index]);
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



