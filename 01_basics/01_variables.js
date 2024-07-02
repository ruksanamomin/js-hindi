
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
const accountId=123456;
let accountName="ruksana@gmail.com";
var accountPassword = '123@ruk';
accountCity = "Hyderabad";
let accountState;

// accountId = 2 // not allowed coz it is a constant
console.log(accountId);

accountName = 'roshan@google.com'
accountPassword='456'
accountCity='Jaipur' 

console.table([accountId,accountName,accountPassword,accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

