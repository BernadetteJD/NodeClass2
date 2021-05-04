var hour = 21;

if (hour == 5 || hour < 12){
    console.log('Good Morning'); // between 5-12
}else if (hour ==12 || hour < 18){
    console.log('Good Afternoon');//between 12-18
}else if(hour == 18 || hour < 22){
    console.log('Good evening');// between 18-22
}else{
    console.log('Good Night');// between 22 - 5
}