// object literals i.e key-value pair
let myObj={
    name:"Atharv",
    age:20,
    e_mail:"atharvkoli80@gmail.com",
    location:"Ichalakarnaji",
    is_login:true,
    last_login:["monday","Tuesday","Wednesday"]
    
}
 /* there are 2 types of object . 1.Literals 2. contructor 3. singleton
when u create constructor its create singleton object it means itself object
when we create object literal singleton not create 
when object is constructor singleton created */
/*const mySymbol=Symbol("JS");
const myObj2={
    [mySymbol]:"AK"
}
console.log(myObj2);
console.log(typeof myObj2[mySymbol]);
*/

myObj.e_mail="abc@gmail.com";
console.log(myObj.e_mail);

/*Object.freeze(myObj);
myObj.e_mail="xyz@gmail.com";
console.log(myObj.e_mail);
*/

myObj.greeting=function(){
    console.log("Hello JS user");

}
console.log(myObj.greeting());


