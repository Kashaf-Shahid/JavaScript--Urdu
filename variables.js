const  accountId = "1234567890";
let userName = "KASHAF";
var accountPassword = "KASHAFFF";

let userEmail = "kashaf@example.com";
let accountCity = "Karachi";


accountPassword = "SHAHID1233";
userEmail = "SHAHID@example.com";
accountCity = "LAHORE";
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table({userName, accountPassword, userEmail, accountCity});
