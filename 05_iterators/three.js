// for of

const arr = [2,4,6,8]

for (const i of arr) {
    //console.log(i);
    
}

const greetings = "Hello-World"
for(const i of greetings){
    // console.log(`Each char of ${i}`);

}
// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const obj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of obj) {
//     console.log(key, ':-', value);
    
//  }//cannot access object using above syntax of for
