const accountId = 14432
let accountEmail="sarrthakbagga24@gmail.com"
var accountPassword ="1234"    //kabhi use mat karo scope ki dikkat hai 
accountCity="Jaipur"           //ese bhi variable declare kar skte hai but not to use

let accountState;              // jab hmm kisi variable ko define karke chod dete hai or koi value nhi hoti to vo undefined consider hota hai 


//  accountId=2  //not allowed(error) bcz upper const me likhi hai 
accountEmail="hdc@.com"
accountPassword="21212121"
accountCity="haryana"
console.log(accountId);
console.table([accountEmail ,accountCity, accountPassword, accountId,accountState])
