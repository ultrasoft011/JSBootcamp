/* Leer dos arreglos A y B con n números cada uno (n es igual para ambos arrays) posteriormente sumar los valores de A con los valores de B y almacenar en un array C, 
mostrar los tres arreglos resultantes. */
let arrayA = [];
let arrayB = [];
let arrayC = [];
let n = prompt("Ingrese porfavor la cantidad de números que desea almacenar");

for(let i = 0; i < n; i++){
    arrayA[i] = Number(prompt("Porfavor ingrese un número para el arreglo A"));
    arrayB[i] = Number(prompt("Porfavor ingrese un número para el arreglo B"));
    arrayC[i] = arrayA[i] + arrayB[i];
}
console.log(arrayA);
console.log(arrayB);
console.log("La sumatoria de los valores del arreglo A y B son respectivamente " + arrayC);