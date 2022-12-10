alert("bienvenidos al juego, antes de empezar, necesitan saber que solo pueden elegir del 1 al 3 (piedra 1, papel 2, tijera 3), si eligen otro nuero automaticamente pierden ")
let player1 = parseInt(prompt("Jugador 1, ingresa tu jugada (piedra 1, papel 2, tijera 3) "))
let player2 = parseInt(prompt("Jugador 2, ingresa tu jugada (piedra 1, papel 2, tijera 3)"))
let descalificado1;
let descalificado2;

switch(player1){
 case 1:
    alert("el jugador 1 a elegido piedra")
    break;
 case 2:
    alert("el jugador 1 a elegido papel")
    break;
 case 3:
    alert("el jugador 1 a elegido tijera")
    break;
default:
    alert("player 1 ha sido descalificado")
    descalificado1 = 1
}

switch(player2){
    case 1:
       alert("el jugador 2 a elegido piedra")
       break;
    case 2:
       alert("el jugador 2 a elegido papel")
       break;
    case 3:
       alert("el jugador 2 a elegido tijera")
       break;
    default:
       alert("player 2 ha sido descalificado")
       descalificado2 = 1
    }

 switch(true){
    case (player1 === 1 && player2 === 1 || player1 === 2 && player2 === 2 || player1 === 3 && player2 === 3):
       alert("empate")
       break;
    case (player1 === 1 && player2 === 3 || player1 === 2 && player2 === 1 || player1 === 3 && player2 === 2 ):
        alert("HAS GANADO, FELICIDADES😼😺")
     break;
    case (descalificado1 === 1 && descalificado2 === 1):
        alert("empate por descalificacion por ambos lados, tramposos")
        break;
    case (descalificado1 === undefined && descalificado2 === 1):
            alert("Gana playern 1, por descalificacion rival")
            break;
    case (descalificado1 === 1 && descalificado2 === undefined):
            alert("Gana playern 2, por descalificacion rival")
            break;
     default:
        alert("HAS PERDIDO, SUERTE PARA LA PROXIMA😿")
   }
