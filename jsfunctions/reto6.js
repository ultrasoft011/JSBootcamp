function obtenerArea(largo, ancho) {
    if((largo >= 1 && largo <= 1000) && (ancho >= 1 && ancho <= 1000)) {
        let area = largo * ancho;
        return area;
    }
    else{
        return ("Hay restricciones de largo y/o de ancho");
    }
}

function obtenerPerimetro(largo, ancho){
    if((largo >= 1 && largo <= 1000) && (ancho >= 1 && ancho <= 1000)) {
        let perimetro = 2 * (largo + ancho);
        return perimetro;
    }
    else{
        return ("Hay restricciones de largo y/o de ancho");
    }
}

/* Datos de prueba */ 
console.log(obtenerArea(3, 2000));
console.log(obtenerPerimetro(3, 4.5));

