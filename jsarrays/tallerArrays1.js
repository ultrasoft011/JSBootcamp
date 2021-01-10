/* Calcular el promedio de n números almacenados en un array. */
let myArray = [5, 3, 8];
let sum = 0;
let average = 0;

for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
};
average = sum / myArray.length;
console.log(average);
