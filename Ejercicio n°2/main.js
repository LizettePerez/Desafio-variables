
// Solicitamos al usuario un temperatura
let numero = prompt("Ingrese temperatura en °C:");

// Se transforman a números enteros o decimal
let n1 = parseFloat(numero);

// Calculos matematicos para la conversión
let tempKelv = n1 + 273.15;
let tempFahr = (n1 * 9/5) + 32;


// Imprimir resultados en pantalla
document.write("<p>La temperatura " + n1 + " en °C, equivale: </p>")
document.write("<p>En Kelvin es  " + tempKelv + " K. </p>");
document.write("<p>En Fahrenheit es  " + tempFahr + "°F.</p>");


