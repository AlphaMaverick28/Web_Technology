//write code for fibonacci series

let a=0,b=1;
let n=3;
console.log(a)
console.log(b)
for(i=0;i<n;i++){
    let c = a+b;
    console.log(c)
    a = b;
    b = c;
}