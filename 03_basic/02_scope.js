let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
   // console.log("Inner;",a);
    
}
 //console.log(a);// study about global and block scope
// console.log(b);
//console.log(c);// accessing the variable of block scope value
 
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
    
// }
  
function one(){
    username = "Shivam"

    function two(){
        fbusername = "Shivendra"
        // console.log(username);
    }

    //  console.log(fbusername);

    two()
}
one()

if(true){

    username = "Shivam"

    if(username == "Shivam"){
        const website = " Patel"
 
     console.log(username + website);
        
    }
    // console.log(website);
    
}
 
// +++++++++++++++++++ Interesting ++++++++++++++++++++++



console.log(addOne(5))
function addOne(num){
    return num + 1
}
// addOne(5)


addTwo(5)
const  addTwo = function(num){
    return num + 2
}
addTwo(5)//