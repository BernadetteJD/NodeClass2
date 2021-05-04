var firstName = NaN;

if (firstName) {
    console.log('Welcome ' + firstName); // as long as firstName has value. It will execute the if.
} else {
    console.log('Please input your name');// If firstName is empty/null. It will execute else.
}

/*const name = null;

if (name) {
  console.log('welcome: ' + name);
} else {
  console.log('Please input your name');  
}

console.log(typeof name)*/