/* Leer n números en un array de enteros y mostrar en pantalla la posición y valor del menor elemento en el array. */
let arrayA = [];
let valorMenor = 0;
let posicion = 0; 
let n = Number(prompt("Ingrese porfavor la cantidad de números que desea almacenar para calcular el valor del menor elemento"));

for(let i = 0; i < n; i++){
    arrayA[i] = Number(prompt("Porfavor ingrese un número para el arreglo"));
}
console.log(arrayA);
for(let j = 0; j < n - 1; j++){

    if(arrayA[j] > arrayA[j + 1]){
            valorMenor = arrayA[j + 1];
            posicion = j;
        }
    else if(arrayA[0] < arrayA[j + 1]){
            valorMenor = arrayA[0];
            posicion = 0;
    }
    else {
            valorMenor = arrayA[j + 1];
            posicion = j + 1;
        }
}
console.log("El número menor de los números que usted ingreso es " + valorMenor);
console.log("Y la posición de ese número es " + posicion);