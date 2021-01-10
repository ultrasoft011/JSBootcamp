/*  Actividad 1
La compañía ‘ACME STUDIOS’, ha desarrollado un videojuego, donde por
cada participante se guarda un registro que contiene el nombre del
jugador y los puntos acumulados.

Cree una estructura en JavaScript que represente la información de un
jugador, solicite al usuario dicha información y almacene su valor en la
estructura creada. */

function jugador (name, puntosAcumulados) {
    this.name = name;
    this.puntosAcumulados = puntosAcumulados;
};

let counter = 1;
let total = 0;
let arrayJugadores = [];

while(counter != 0){
    counter = prompt("Por favor digite 1 si desea guardar un dato de un jugador o 0 para finalizar el programa");
    if(counter != 0) {
        arrayJugadores = new jugador(prompt("Por favor ingrese el nombre del jugador"), prompt("Por favor ingrese el puntaje acumulado"));
        console.log(arrayJugadores);
    }
    else if(counter == 2){

        function aumentarPuntos (){
            jugadorNuevo.puntosAcumulados = puntosAcumulados + 1000;
        }
    }
}


