/* Leer un numero e indicar en consola si es positivo o negativo el ciclo termina cuando se ingresa un cero. */
let number = 1;

while(number != 0){
    number = prompt("Ingrese un número");
    if(number < 0) {
        console.log("El número que usted ingreso es negativo");
    }
    else{
        console.log("El número que usted ingreso es positivo");
    }
}