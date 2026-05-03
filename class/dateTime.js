
// Creating Date Objects


// Current date & time
let now = new Date();
console.log("Current DateTime:", now);

// Specific date (YYYY, MM-1, DD, HH, MM, SS)
let dob = new Date(2003, 6, 15, 10, 30, 0); // July = 6
console.log("DOB:", dob);

// From string
let fromString = new Date("2026-01-26");
console.log("From String:", fromString);

// From timestamp (milliseconds since 1 Jan 1970)
let fromTimestamp = new Date(1700000000000);
console.log("From Timestamp:", fromTimestamp);




// Get Methods


console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth());       // 0-11
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());           // 0=Sunday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());




// Set Methods


let future = new Date();
future.setFullYear(2030);
future.setMonth(11); // December
future.setDate(25);
console.log("Future Date:", future);




// Formatting


console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toISOString():", now.toISOString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());




// Difference between two dates


let start = new Date("2026-01-01");
let end = new Date("2026-01-26");

let diffMs = end - start; // difference in milliseconds
let diffDays = diffMs / (1000 * 60 * 60 * 24);

console.log("Difference in days:", diffDays);



// Timestamp


// Current timestamp
let timestampNow = Date.now();
console.log("Current Timestamp:", timestampNow);

// Convert date to timestamp
let ts = now.getTime();
console.log("Date to Timestamp:", ts);

// Convert timestamp to date
let newDate = new Date(ts);
console.log("Timestamp to Date:", newDate);
