const marvel_heroes =["thor","Ironman", "spiderman"]
const dc_heroes =["supeman", "flash", "batman"]

marvel_heroes.push(dc_heroes)        //MERGE TWO ARRAY
//console.log(marvel_heroes)
                    // access elements
//console.log(marvel_heroes[3][1])


//concate  2 way to merge two arrays


 const allHeroes=marvel_heroes.concat(dc_heroes)
//console.log(allHeroes)

// 3rd way to merge (spread operator)
const all_new_heroes =[...marvel_heroes, ...dc_heroes,]
// console.log(all_new_heroes)

//  array bna na 
//  console.log(Array.from("Sarthak"))

let score1=200
let score2=300
let score3=600

console.log(Array.of(score1,score2,score3));





