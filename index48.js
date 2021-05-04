var message = "3.14 it's a great number but 42 it's the answer to life.";
var pi = parseFloat(message.substr(0 , 4));
var answerToLife = parseInt(message.slice(28, -25));

console.log(typeof pi, pi, typeof answerToLife, answerToLife);
var result = pi + answerToLife;
console.log(result);

var output = `${result.toString()} is the result of adding pi and answer to life`
console.log(output);
