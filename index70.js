/* Create a new index70.js file
Use while structure to only sum odd numbers between 0 and 1000
Show the partial result as output too*/

var number = 0;
var oddSum = 0;

while (oddSum < 1001){
    if (number % 2 !== 0){
        oddSum = oddSum + number;
        console.log(oddSum);}
        number ++
        
}