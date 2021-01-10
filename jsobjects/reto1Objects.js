/* Almacenar los datos de un producto en un registro, Cada producto debe contener información concerniente a: código, nombre del producto, precio.
Diseñar un programa que permita cargar la información de n productos en una lista. */

function producto (código, nombre, precio) {
    this.código = código;
    this.nombre = nombre;
    this.precio = precio;
};

let n = 0;
let total = 0;
let array = [];

n = prompt("Porfavor ingrese el número de productos que desea registrar");

for (let i = 0; i < n; i++){
    let producto1 = new producto(prompt("Ingrese el código del producto"), prompt("Ingrese el nombre del producto"), Number(prompt("Ingrese el precio")));
    total = total + producto1.precio;
    console.log(producto1);
}
console.log(total);