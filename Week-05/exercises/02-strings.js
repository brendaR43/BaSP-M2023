// Exercise 2. Strings

//a
var today = 'Today is Saturday and its a nice day';
console.log(today.toUpperCase());

//b
var yesterday= 'Yesterday was Friday and it rained';
var Yesterdaywas= yesterday.substring(0,5);
console.log(Yesterdaywas);

//c
var tomorrow= 'Tomorrow is Sunday and I am going to church';
var tomorrowis= tomorrow.substring(40,43);
console.log(tomorrowis);

//d 
var JavaScript= 'JavaScript is a programming language';
var JavaScript_is= JavaScript[0].toUpperCase() + JavaScript.substring(1);
console.log(JavaScript_is);

//e
var operator= 'An operator is a mathematical symbol';
var mathematical_symbol= operator.indexOf(' ');
console.log(mathematical_symbol);

