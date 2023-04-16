// Exercise 3. If Else

//a 
var random_number= Math.random();
console.log(random_number);

if (random_number >= 0.5) {
    console.log('Greater than or equal to 0,5');
} else {
    console.log('Lower than 0,5');
}

//b

var Age= 52;
if (Age < 2) {
    console.log('Bebe');
} else if ((Age >= 2) && (Age <= 12)){
    console.log('Niño');
} else if ((Age > 12) && (Age <=19)){
    console.log('Adolescente');
} else if ((Age >= 20) && (Age <=30)){
    console.log('Joven');
} else if ((Age >= 31) && (Age <=60)){
    console.log('Adulto');
} else if ((Age >= 61) && (Age <=75)){
    console.log('Adulto mayor');
} else if ((Age >75)) {
    console.log('Anciano');
}
