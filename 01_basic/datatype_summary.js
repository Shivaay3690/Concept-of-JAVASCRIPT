// Primitive Data Types(call by Value in memory stack)

// 7 types: - string boolean number null undefined bigInt symbol

const score = 100
const valuescoree = 100.4

const isLoggedIn = true
const outsideTemp = null
let userEmail ;

const id = Symbol("1234")
const anotherId = Symbol("1234")

// console.log(id === anotherId)

const bignumber = 132434312443n

// Non - Primitive Data types)(call by Reference in memory stack)

// Array Object function

const heroes = ["shaktiman","naagraj","Doga"];

const myObject = {
    name: "Shivam",
    age: 20,
    bool: true,
}

//const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(typeof bignumber)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive)   heap(non-primitive)

let myyoutubename = "shivamspdotcom"
 let anothername = myyoutubename
 anothername = "chaiaurcode"

 console.log(anothername)
 console.log(myyoutubename)

 let userone = {
    email: "user@gmail.com",
    age: 20,
 }
 let usertwo = userone

 usertwo.email = "shivamsp7860@gmail.com"
 console.log(userone.email)
 console.log(usertwo.email)