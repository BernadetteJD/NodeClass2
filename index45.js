var playerName = 'Darian Durant is lame';
var teams = 'BC Lions, Calragy Stampeders Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers0';
var message = 'Regina is the best Canadian City, Go Riders';

var DarianDurantIs = playerName.slice(0, -7).toUpperCase() + playerName.slice(14, -4);
console.log(DarianDurantIs);
var riders = teams.charAt(65).toUpperCase() + teams.slice(66, -24);
console.log(riders);
var theBest = message.slice(10, -24);
console.log(theBest);
var go = message.slice(32, -6);
console.log(go);

var finalOutput = `${DarianDurantIs} ${theBest} ${riders} player${go} ${riders}!!`;

console.log(finalOutput);


