let Mydate=new Date()
console.log(Mydate) // Current date and time
console.log(Mydate.toString()) // 'Mon Oct 16 2023 12:34:56 GMT+0530 (India Standard Time)' (string representation of the date)
console.log(Mydate.toDateString()) // 'Mon Oct 16 2023' (date part only)
console.log(Mydate.toTimeString()) // '12:34:56 GMT+0530 (India Standard Time)' (time part only)    
console.log(Mydate.toISOString()) // '2023-10-16T07:04:56.789Z' (ISO 8601 format)
console.log(Mydate.toLocaleDateString()) // '10/16/2023' (formatted according to the local date format)

const Mydate2 = new Date(2, 10, 2023, 12, 0, 0); // Year is 2023, Month is 10 (November), Day is 2
console.log(Mydate2) // 'Mon Nov 02 2023 12:00:00 GMT+0530 (India Standard Time)' (specific date and time)
console.log(Mydate2.toString()) // 'Mon Nov 02 2023 12:00:00 GMT+0530 (India Standard Time)' (string representation of the specific date)
console.log(Mydate2.getMonth()) // 10 (Month is 0-indexed, so 10 represents November)
console.log(Mydate2.getFullYear()) // 2023 (Year)
console.log(Mydate2.getDate()) // 2 (Day of the month)
console.log(Mydate2.getHours()) // 12 (Hour in 24-hour format)
console.log(Mydate2.getMinutes()) // 0 (Minutes)
console.log(Mydate2.getSeconds()) // 0 (Seconds)
console.log(Mydate2.toLocaleString('default', { weekday: 'long' })) // 'Monday' (full name of the day of the week)
let timestamp = Date.now(); // Get timestamp in milliseconds since January 1, 1970
console.log(timestamp) // e.g., 1702445696789 (current timestamp in milliseconds)
console.log(Math.floor(timestamp/1000)) // e.g., 1702445696 (current timestamp in seconds)

