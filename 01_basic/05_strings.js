const name = "Shivam"
const repoCount = 50

// console.log(name + repoCount + "Value");
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// **** New way to initialize string*****
const gameName = new String("Shivam-patel-sp")

//console.log(gameName[0])
//console.log(gameName.length)
//console.log(gameName.__proto__)//Object hota hain string
//console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf("m"))

const newString = gameName.substring(0,2)
// console.log(newString);

const string = gameName.slice(-6,3)
// console.log(string);

const anotherString = "   Shivam   "
// console.log(anotherString);
// console.log(anotherString.trim());

const url = "https://shivam.com/shivam%20patel"
// console.log(url.replace("%20","-"));
// console.log(url.includes("patel"));

console.log(gameName.split('-'));



