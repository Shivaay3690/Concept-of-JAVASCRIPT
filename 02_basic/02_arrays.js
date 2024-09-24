const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["Superman", "flash", "batman"]
const indian_heros = ["Krish", "Skatiman", "chitti"]

const all_heros = marvel_heros.concat(dc_heros)
// console.log( all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...indian_heros]
// console.log(all_new_heros);

const arr = [2, 3, 4 ,[5, 7, 2], 1, 3,[6, 2,[9, 5]]]
const arr1 = arr.flat(Infinity)
// console.log(arr1);


// console.log(Array.isArray("Shivam"));
// console.log(Array.from("Shivam");
// console.log(Array.from({name:"shivam"}));//interesting



let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1,score2,score3));
