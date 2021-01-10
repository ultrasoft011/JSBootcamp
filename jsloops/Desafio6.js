/* Pedir números hasta que se ingrese un numero negativo o null calcular el promedio de los numeros ingresados */

let number = 0;
let sum = 0;
let counter = 0;
let average = 0;

while(number >= 0 && number != null){
    number = Number(prompt("Ingrese un número"));
    if(number < 0){ 
        break;
    }
    console.log(number);
    sum = sum + number;
    counter = counter + 1;
}
average = sum / counter;
alert(average);