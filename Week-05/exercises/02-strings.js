console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
 mayúscula (utilizar toUpperCase).*/
console.log('-Exercise 2.a:');
var today = 'Today is Saturday and its a nice day';
console.log(today.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
 los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.b:');
var yesterday= 'Yesterday was Friday and it rained';
var Yesterdaywas= yesterday.substring(0,5);
console.log(Yesterdaywas);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
 los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.c:');
var tomorrow= 'Tomorrow is Sunday and I am going to church';
var tomorrowis= tomorrow.substring(40,43);
console.log(tomorrowis);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
 (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2.d:');
var JavaScript= 'JavaScript is a programming language';
var JavaScript_is= JavaScript[0].toUpperCase() + JavaScript.substring(1);
console.log(JavaScript_is);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('-Exercise 2.e:');
var operator= 'An operator is a mathematical symbol';
var mathematical_symbol= operator.indexOf(' ');
console.log(mathematical_symbol);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +).*/ 
console.log('-Exercise 2.f:');
var Eich= 'brendan eich: inventor of javascript';
var Brendan= Eich

