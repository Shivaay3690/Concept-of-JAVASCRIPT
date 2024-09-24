// const obj = new Object()
// console.log(obj);

const mySym = Symbol("key1")
const tinderuser = {
    name: "shivam",
    email: "shivamsp7860@gmail.com",
    [mySym]: "mykey1",
    age: 20,
    isLoggedIn : false,
    day: ["Monday", " Friday"],
    location: "Bhopal",
}

console.log(tinderuser.name);
console.log(tinderuser["email"]);
console.log(tinderuser["name"]);
console.log(typeof tinderuser[mySym]);

tinderuser.email = "shivam@gmail.com"
// Object.freeze(tinderuser)
tinderuser.email = "Shivendra@gmail.com"
console.log(tinderuser);

tinderuser.greeting = function(){
    console.log("hello JS user");
    
}
tinderuser.greeting2 = function(){
    console.log(`Hello Tinder user , ${this.name}`);
    
}
console.log(tinderuser.greeting2());
console.log(tinderuser.greeting());
