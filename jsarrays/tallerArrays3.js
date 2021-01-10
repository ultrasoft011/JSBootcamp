/* Leer n números en un array de enteros y mostrar en pantalla la posición y valor del mayor elemento en el array. */
let arrayA = [];
let valorMayor = 0;
let posicion = 0; 
let n = Number(prompt("Ingrese porfavor la cantidad de números que desea almacenar para calcular el valor del mayor elemento"));

for(let i = 0; i < n; i++){
    arrayA[i] = Number(prompt("Porfavor ingrese un número para el arreglo"));
}
console.log(arrayA);
for(let j = 0; j < n - 1; j++){

    if(arrayA[j] > arrayA[j + 1]){
            valorMayor = arrayA[j];
            posicion = j;
        }
    else if(arrayA[0] > arrayA[j + 1]){
            valorMayor = arrayA[0];
            posicion = 0;
    }
    else {
            valorMayor = arrayA[j + 1];
            posicion = j + 1;
        }
}
console.log("El número mayor de los números que usted ingreso es " + valorMayor);
console.log("Y la posición de ese número es " + posicion);