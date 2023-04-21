
// Se solicitan los valores al usuario y se guardan como variables
let numero1 = prompt("Ingrese primer número:");
let numero2 = prompt("Ingrese segundo número");

//  Se transforman a números enteros
let n1 = parseInt(numero1);
let n2 = parseInt(numero2);

// Se desarrollan las operaciones matematicas
let suma = n1 + n2;
let resta = n1 - n2;
let division = n1 / n2;
let multiplicacion = n1 * n2;
let modulo = n1 % n2;


// Se imprime en la pantalla
document.write("<p>Número 1: " + n1 + " Número 2: " + n2 + " </p>");
document.write("<p>La suma es " + suma + " </p>");
document.write("<p>La resta es " + resta + " </p>");
document.write("<p>La division es " + division + " </p>");
document.write("<p>La multiplicacion es " + multiplicacion + " </p>");
document.write("<p>La modulo es " + modulo + " </p>");
