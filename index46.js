var userAndPassword = 'pepito2071,12345';
var userName, password;

console.log(userAndPassword.length)

userName = userAndPassword.substr(0, 10);
password = userAndPassword.substr(11, 16);
result = `The user ${userName} has ${password} as password`;

console.log(result);
