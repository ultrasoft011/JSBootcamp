/* Average in My Array

Descripción
Dado un array de numeros enteros arr, representado por:
arr = [5, 8, 3, 1, 10, 11, 0, 2]
Diseñe una función, que retorne el valor promedio del array.
Ejemplo:
arr = [5, 8, 3, 1, 10, 11, 0, 2]avg: 5
*/

const arr = [5, 8, 3, 1, 10, 11, 0, 2];
let suma = 0;
let promedio = 0;

function averageArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
promedio = suma / arr.length;
console.log(promedio);
}

averageArray(arr);
