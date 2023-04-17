console.log('--EXERCISE 4: IF ELSE');
/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta 
por cada palabra modificada.*/
console.log('-Exercise 5.a:');
var week= ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for (var index = 0; index < week.length; index++) {
    alert(week[index]) 
}

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta 
por cada palabra modificada.*/
console.log('-Exercise 5.b:');
var week01= ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for (var index = 0; index < week01.length; index++) {
    week01 [index] = week01 [index][0].toUpperCase() + week01[index].substring(1);
    alert(week01[index]);
}
console.log(week);

/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo 
con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única 
alerta con la cadena completa.*/
console.log('-Exercise 5.c:');
var sentence= '';
var week02= ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for (var index = 0; index < week02.length; index++) {
    sentence += week02[index] + '';
}
alert(sentence)
console.log(week02);

/*Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, 
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el 
número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/
console.log('-Exercise 5.d:');
var numbers0to9= [];
for (let index = 0; index < 10; index++) {
    numbers0to9.push(index);
}
console.log(numbers0to9);


