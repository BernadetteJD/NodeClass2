var text = 'HELLO';
var result;
var firstChar = text.charAt(4);
var secondChar = text.charAt(3);
var thirdChar = text.charAt(2);
var fourthChar = text.charAt(1);
var fifthChar = text.charAt(0);

result = firstChar + secondChar + thirdChar + fourthChar + fifthChar;
var message = "the final result is "

console.log(message.concat(result));