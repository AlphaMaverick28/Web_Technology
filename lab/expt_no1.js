var a=10;
var a=20; // redeclaration  allowed 
a=30;     //  re-assignment  allowed
document.writeln("var a:"+ a+"<br>");
console.log("var a:",a);

let b=10;
// let b=20;  redeclaration not allowed
b=30; // re-assignment allowed 
document.writeln("let b:"+b+"<br>");
console.log("let b:",b);

const c=10;
// const c=20;   redclaration not allowed 
// c= 30;    re-assignment not allowed
document.writeln("const c:"+c+"<br>");
console.log("const c:",c);


if (true)
{
var a=10;
let b=20;
const c=30;
}
document.writeln(a+"<br>")
console.log(a);  // works - var is global scoped 
//console.log(b);   error: let is block scoped
//console.log(c);   error: const is block scoped



let full_name = "Atharv Koli";
let age = 20;
let e_mail = "abc@gmail.com";
let course = "CSE (AIML)";

document.write("Name: " + full_name + "<br>");
console.log("Name:", full_name);

document.write("Age: " + age + "<br>");
console.log("Age:", age);

document.write("E-mail: " + e_mail + "<br>");
console.log("E-mail:", e_mail);

document.write("Course: " + course + "<br>");
console.log("Course:", course);




let num=7;
document.writeln("Number :"+num+"<br>");
console.log("Number :",num);

if(num%2==0){
    document.writeln("Even Number <br>");
    console.log("Even Number ");
}

else{
     document.writeln("Odd Number <br>");
    console.log("Odd Number");
}



let marks=90;
console.log("Marks:",marks);
document.write("Marks :"+marks+"<br>");
if(marks>35){
    document.writeln("Pass<br>");
    console.log("Pass");
}
else{
    document.writeln("Fail<br>");
    console.log("Fail");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i + "<br>");
}
