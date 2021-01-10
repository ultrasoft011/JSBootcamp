/* Dado un array de numeros enteros arr, representado por:
arr = [3, 2, 6, 4, 5]
Diseñe una función, que retorne el cuadrado de cada uno de sus elementos.
Ejemplo:
arr = [3, 2, 6, 4, 5] ==> [9, 4, 36, 16, 25]
El array original no debe ser afectado
*/ 

let arr = [3, 2, 6, 4, 5];

function powMyArray(arr) {
    let powArray = [];
    for (let i = 0; i < arr.length; i++) {
        powArray[i] = arr[i] * arr[i];
    }
console.log(arr);
console.log(powArray);
}

powMyArray(arr);
