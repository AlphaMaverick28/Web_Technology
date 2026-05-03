//write a code for reversse number

let num = 123;
let reverse = 0;

while(num>0){
    let lastdigit = num%10;
    reverse = reverse * 10 + lastdigit;
    num = Math.floor(num / 10);
}
console.log(reverse)