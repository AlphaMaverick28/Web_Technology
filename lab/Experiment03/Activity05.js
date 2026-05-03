// In JavaScript, every value is either truthy (evaluates to true in a Boolean context)
//  or falsy (evaluates to false). This behavior, known as type coercion, is essential for
// conditional statements (if, else) and logical operators (&&, ||). 

// Using Boolean() function
Boolean(0);       // false
Boolean("hello"); // true

// Using the double negation operator (!!)
console.log(!!null);           // false
console.log(!![]);             // true
