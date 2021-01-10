function areaCirculo(radio) {
    const PI = Math.PI;
    let areaFinal = PI * radio ** 2; 
    return areaFinal;
}
let radio = prompt("Ingrese un numero de radio");
console.log(areaCirculo(radio));
