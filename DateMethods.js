// Create a new Date object
let date = new Date();

// getDate()
console.log(date.getDate()); // Output: Current day of the month (e.g., 1-31)

// getDay()
console.log(date.getDay()); // Output: Current day of the week (0-6, where 0 represents Sunday)

// getSeconds()
console.log(date.getSeconds()); // Output: Current seconds (0-59)

// getHours()
console.log(date.getHours()); // Output: Current hour (0-23)

// getMilliseconds()
console.log(date.getMilliseconds()); // Output: Current milliseconds (0-999)

// getMinutes()
console.log(date.getMinutes()); // Output: Current minutes (0-59)

// getMonth()
console.log(date.getMonth()); // Output: Current month (0-11, where 0 represents January)

// setHours()
date.setHours(12);
console.log(date.getHours()); // Output: 12 (hour has been set to 12)

// setMilliseconds()
date.setMilliseconds(500);
console.log(date.getMilliseconds()); // Output: 500 (milliseconds have been set to 500)

// setMinutes()
date.setMinutes(30);
console.log(date.getMinutes()); // Output: 30 (minutes have been set to 30)

// setMonth()
date.setMonth(5); // Sets the month to June (0-11, where 5 represents June)
console.log(date.getMonth()); // Output: 5 (month has been set to June)

// setSeconds()
date.setSeconds(45);
console.log(date.getSeconds()); // Output: 45 (seconds have been set to 45)
