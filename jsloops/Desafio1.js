/* Leer un numero y mostrar su cuadrado en consola, repetir el proceso hasta que 
se introduzca un número negativo */
let number = 0;
while(number >= 0) {
    number = prompt("Ingrese un número al cual quiere calcular el cuadrado");
    console.log(number * number);
}