/* Leer numeros hasta que se introduzca un numero negativo y mostrar cuantos numeros fueron leidos */ 
let number = 0;
let counter = 0;
while(number >= 0){
    number = prompt("Ingrese un número");
    console.log(number);
    counter = counter + 1;
}
alert(counter);