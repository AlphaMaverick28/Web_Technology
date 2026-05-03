//count vowels in a string
let count = 0
let str = "omteke"
let vowels = "aeiouAEIOU"
for(let char of str){
if(vowels.includes(char)){
    count++
}
}
console.log(count)
