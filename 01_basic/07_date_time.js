// Dates
let myDate = new Date()

// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


// let myCreateDate = new Date(2024,0,30)
// let myCreateDate = new Date(2024,0,30,4,7,20)
// let myCreateDate = new Date("2023-11-30")
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${ newDate.getDay()} and the time is`

newDate.toLocaleString("default",{
       weekday: "long",
       timeZone: "UTC"
})



