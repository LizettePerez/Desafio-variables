
// Solicitamos al usuario una cantidad de días
let numero = prompt("Ingrese número de días");

// Se transforman a números enteros
let n1 = parseInt(numero);

let anio = Math.floor(n1 / 365);
let modAnio = n1 % 365;

let semanas = Math.floor(modAnio / 7);
let modSema = semanas % 7;

let dias = modSema;

document.write("El número ingresado " + n1 + " representa: ")
document.write(anio + " año(s), " + semanas + " semanas, " + dias + " días.");

