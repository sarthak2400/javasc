const name="sarthak"
const last_name='bagga'

//  console.log(`hello my name is ${name} and last name is ${last_name}`);
  //modern way 

const gameName = "clashof-clans"
//console.log(gameName[0]);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));

//*************substring  */
const newString =gameName.substring(0,4)
//console.log(newString);             // python ki trah last index wali value not included

//slice
const anotherString= gameName.slice(-8, 4)
//console.log(anotherString);                  // isme negative no mtlb piche se likh sakte hai 


// jab log jyada space de dete hai website pe name likhte time 
const newStringOne="    Sarthak    "
console.log(newStringOne);
console.log(newStringOne.trim());

//REPLACE
const url ="https://sarthak.com/sarthak%20sharma78"
console.log(url.replace('%20', '-'))
 
//SPLIT
console.log(gameName.split('-'))









