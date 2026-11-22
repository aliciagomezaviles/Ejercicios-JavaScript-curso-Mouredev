// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo (resto de la división)
console.log(a**b); // Exponente

a++ // Incremento
console.log(a);

b-- // Decremento
console.log(b);


// Operadores de asignación

let myVariable = 2
console.log(myVariable);

myVariable +=2
console.log(myVariable);

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación (el resultado de la comparación de dos variables siempre es un boolean, true o false)

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6); // Comprobamos la igualdad por valor
console.log(a == "6"); // Igualdad por valor
console.log(a == a);
console.log(a === 5); // Igualdad por identidad (por tipo y valor)
console.log(a === 6);
console.log(a === "6");

console.log(a != 6); // ! negación
console.log(a !== "6");

console.log(0 == false);
console.log(1 == false);

console.log(0 == "");
console.log(0 == " ");
console.log(0 == '');
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);

// Truthy values (valores verdaderos porque sí)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true


// Falsy values (valores falsos porque sí)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías


// Operadores lógicos

// and (&&) (Si una de las expresiones es falsa no se cumple la expresión)(Todo verdadero, verdadero, todo falso, falso, si tenemos algún falso es falso también aunque el resto sea verdadero)

console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 10 < 20);


// or (||) (Si se cumple una de las comparaciones el cómputo general será verdadero)

console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 || 15 > 20 || 10 < 20);

console.log(5 > 10 && 15 > 20 || 10 < 20);


// not (!)

console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));


// Operadores ternarios

// ? : (condicionales)

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");































