let originalnum = 121;        
let temp = originalnum;        
let reversenum = 0;            

while (temp > 0) {
    reversenum = reversenum * 10 + (temp % 10); // add last digit
    temp = Math.floor(temp / 10);               // remove last digit
}

// compare original and reversed number
if (originalnum === reversenum) {
    console.log("Number is palindrome");
} else {
    console.log("Number is not palindrome");
}