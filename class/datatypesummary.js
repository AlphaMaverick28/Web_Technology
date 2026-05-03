// symbol used when there is unique id 
const another_id=Symbol("123");
console.log(another_id,typeof another_id);

const id=123;
console.log(id===another_id);

// JavaScript is dynamic 

// array 
const heros=["captain","thor","ironman"];
const num=[1,2,3,4];
console.log(heros);
console.log(num);

// objects 

let student={
    fname:"Atharv",
    age:24
}
console.log("Name :",student.fname); 
console.log("Age :",student.age);

// function
// activity - function deep study

const a=function name()
{
    console.log("Atharv");
}
a();