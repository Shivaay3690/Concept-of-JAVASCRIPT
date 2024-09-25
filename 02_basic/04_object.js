// const fbUser = new Object()
const fbUser = {}

fbUser.id = "132e"
fbUser.name = "shivam"
// fbUser.email = "shivamsp@gmail.com"
fbUser.isLoggedIn = false

// console.log(fbUser);

const newUser = {
    email: "Shivam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "Patel",
        }
    }
}
// console.log(newUser.fullname.userfullname.lastname);
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
// const obj3 = Object.assign({},obj1,obj2)/
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

// when values comes from Database

const userData = [
    {
        id: "1",
        email: "shivam@gmail.com",
    },
    {
        id: "2",
        email: "shivam12@gmail.com",
    },
    {
        id: "3",
        email: "shivam23@gmail.com"
    }
    ]
    userData[1].email
    // console.log(fbUser);

    // console.log(Object.keys(fbUser));
    // console.log(Object.values(fbUser));
    // console.log(Object.entries(fbUser));
    // console.log(fbUser.hasOwnProperty("isLogged"));


    // Concept of de-structure and JSON(API)
    const course = {
        name: "JS in hindi",
        price: "999",
        instructor:"Shivam",
    }
    // console.log(course.name)
    // console.log(course["name"])
    

const {instructor: educator} = course//de-structure
console.log(educator);

//JSON 
{ 
    "name": "shivam ",
    "age": "20",
    "location":"bhopal"
}

