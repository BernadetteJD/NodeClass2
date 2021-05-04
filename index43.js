var text = 'game of thrones';
var firstChar, secondChar, thirdChar, message;

firstChar = text.charAt(0);
secondChar = text.charAt(5);
thirdChar = text.charAt(8);
message = "the final result is: "

console.log(message.concat(firstChar.toUpperCase(), secondChar.toUpperCase(), thirdChar.toUpperCase()));