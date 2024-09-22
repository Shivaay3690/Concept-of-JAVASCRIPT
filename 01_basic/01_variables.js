const accountId = 112321
let accountEmail = "shivamsp32@gmail.com"
var accountPass = "1334"
accountCity = "Jaipur"
let accountState;
// accountId = 2// not allowed
accountEmail = " shivam@gmail.com"
accountPass = "3332"
accountCity = "Bangluru"
/*
Prefer not to use var 
because of issue in block and functional scope
const variable:-  ko change nhi kr sakte.fix hota hain
let variables :- ko redefine kr sakte hain
*/
console.log(accountId);
console.table([accountState,accountEmail,accountId,accountPass,accountCity])
