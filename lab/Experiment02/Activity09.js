//check string is palindrome or not

let str = "om"
let reversed
reversed = str.split("").reverse().join("");

if(str === reversed){
    console.log("string is pallindrom")
}
else{
    console.log("string is not pallindrom")
}