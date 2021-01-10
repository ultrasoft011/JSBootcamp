/* Max value in My Array

Descripción

Dado un array de numeros enteros arr, representado por:
arr = [5, 8, 3, 1, 10, 11, 0, 2]
Diseñe una función, que imprima el elemento y la posición con el mayor valor en el array.
Ejemplo:
arr = [5, 8, 3, 1, 10, 11, 0, 2]pos: 5val:11
*/

let arr = [5, 8, 11, 25, 34, 99];
let valorMaximo = 0;
let posicion = 0;

function maxValue(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            valorMaximo = arr[i];
            posicion = i;
        }
        else {
            valorMaximo = arr[i+1];
            posicion = i+1;
        }
    }
console.log(valorMaximo);
console.log(posicion);
}

maxValue(arr);