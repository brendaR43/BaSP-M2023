// Exercise 3. Arrays

//a
var months= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(months[4]);
console.log(months[10]);

//b
console.log(months.sort());

//c
months.unshift('start');
console.log(months);

months.push('end');
console.log(months);

//d
months.shift();
console.log(months);

months.pop()
console.log(months);

//e
months.reverse();
console.log(months);

//f
console.log(months.join('-'));

//e
var months= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var some_months= months.slice(4,11);
console.log(some_months);
