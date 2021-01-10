/* Leer un numero hasta que se ingrese null o espacio en blanco para cada numero mostrar si es par o impar */
let number = 1;

while(number != null && number != ""){
    number = prompt("Ingrese un número");
    if(number % 2 == 1) {
        console.log("El número que usted ingreso es impar");
    }
    else{
        console.log("El número que usted ingreso es par");
    }
}