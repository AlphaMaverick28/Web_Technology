let num = 6;
let isPrime = true;   


if (num <= 1) {
  isPrime = false;
}


for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;  
    break;            
  }
}


if (isPrime) {
  console.log("Number is prime");
} else {
  console.log("Number is not prime");
}