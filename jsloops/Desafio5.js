/* Pedir numeros hasta que se teclee un cero, espacio en blanco o null, mostrar la suma de todos los numeros */
let number = 1;
let sum = 0;

while(number != 0 && number != "" && number != null){
    number = Number(prompt("Ingrese un número"));
    sum = sum + number;
}
alert(sum);