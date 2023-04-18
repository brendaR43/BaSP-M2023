console.log('--EXERCISE 6: FUNCTIONS');
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log('-Exercise 6.a:');
function sum(a, b) {
    return a + b;
}
var result= sum(21, 45);
console.log(result);

/*Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros 
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y 
retornar el valor NaN como resultado.*/
console.log('-Exercise 6.b:');
function sum01(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return a + b;
    } else {
        return alert('NaN');
    }
}

//Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c:');
function validateInterger(numberr) {
    if (Number.isInteger(numberr)) {
        return true;
    } else {
        return false;
    }
}

/*Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio
 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error 
 y retornar el número convertido a entero (redondeado).*/
 console.log('-Exercise 6.d:');
 function copyOfSum(value1, value2) {
    if (isNaN(value1) && isNaN(value2)){
        if (validateInterger(value1) && validateInterger(value2)){
            return alert('number with decimals')
        }
        return value1 + value2;
    }
 }
/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
 probando que todo siga funcionando igual que en el apartado anterior.*/
 /*function validationE(a,b){
    var res = validationD(a,b);
    return res;
}*/
console.log('-Exercise 6.e:');
function CopyOfCopyOfSum(value1, value2) {
    var res= copyOfSum(value1, value2);
    return res;
}


