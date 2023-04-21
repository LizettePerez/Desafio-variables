// Solicitamos al usuario que ingrese cinco números
let numero1 = prompt("Ingrese número 1: ");
let numero2 = prompt("Ingrese número 2: ");
let numero3 = prompt("Ingrese número 3: ");
let numero4 = prompt("Ingrese número 4: ");
let numero5 = prompt("Ingrese número 5: ");

//  Se transforman a números enteros
let n1 = parseInt(numero1);
let n2 = parseInt(numero2);
let n3 = parseInt(numero3);
let n4 = parseInt(numero4);
let n5 = parseInt(numero5);

// Realizamos suma
let suma = n1 + n2 + n3 + n4 + n5;

// Realizamos el calculo del promedio
let promedio = suma / 5;


// Se imprime en la pantalla
document.write("<p> Los números ingresados " + n1 + ", " + n2 + ", " + n3 + ", " + n4 + " y " + n5 + " . </p>");
document.write("<p> La suma de todos los números es: " + suma + " .</p>");
document.write("<p> El promedio es: " + promedio + "</p>");
