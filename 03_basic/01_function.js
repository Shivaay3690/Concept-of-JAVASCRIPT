function name(){

// console.log("S");
// console.log("h");
// console.log("i");
// console.log("v");
// console.log("a");
// console.log("m");
}
// console.log(name())

// function add(num1,num2){
//    console.log( num1 + num2)
// }

// function add1(num1,num2){
// //    let result = num1 + num2
//    return num1 + num2
// //    console.log("Shivam");
   
// }
// const ans = add1(2,3)
// console.log("Ans is:",ans);
 
function isLogged(username){
    if(username === undefined){
        // console.log("please enter the username");
        return
    }
    return `${username} has just logged in`
}
 const ans = isLogged()
//  console.log(isLogged("Shivam"));
 
//  console.log(ans);

function calculateCartPrice(value1,valu2, ...num1){
    return num1
}
//  console.log(calculateCartPrice(200,300,400,500));

const user = {
    username : "Shivam",
    price: 999,
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and the price is ${anyObject.price}`);
    
} 
//  handleObject(user)
 
handleObject({
    username: "sam",
    price: 999,
})// Passing of Direct Object in the function

const mynewArray = [200,300,500,100]

function getsecondvalue(getvalue){
    return getvalue[2]
}
console.log(getsecondvalue(mynewArray));
console.log(getsecondvalue([200,300,400,500]));
