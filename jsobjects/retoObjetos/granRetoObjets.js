/* Desarrollar un programa que guarde la información básica de sus clientes, nombre, apellido, 
teléfono (no mayor a 10 dígitos), correo electrónico. 
Adicional a esto, la empresa quiere contar con una lista de totales de compras de cada cliente, 
basado en las diferentes compras que realizo. */

// Declarar objeto "Clientes" 
function clientes (nombre, apellido, telefono, correoElectronico, totalCompras) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correoElectronico = correoElectronico;
    this.totalCompras = totalCompras;
};

let counter = 1;
let total = 0;

while(counter != 0){
    counter = prompt("Ingrese 1 para agregar un nuevo cliente o 0 para finalizar el programa");

if (counter != 0){
    let persona1 = new clientes (prompt("Ingrese el nombre"), prompt("Apellido"), prompt("telefono"), prompt("correo"), Number(prompt("total")));
    total = total + persona1.totalCompras;
    console.log(persona1);
    console.log(total);
}
}
