alert("Bienvenido a piedra papel y tijera")

let eleccion =  parseInt(prompt("elige piedra (1), papel (2) o tijera (3). SOLO NUMEROS"))
let pc = aleatorio(1, 3)

function aleatorio(min, max){
    return Math.floor(Math.random()  * (max - min + 1) + 1 );
}

if(eleccion === 1){
    alert("haz elegido piedra")
    pcMovement()
}else if (eleccion === 2){
    alert("haz elegido Papel")
    pcMovement()
}else if(eleccion === 3){
    alert("haz elegido tijera")
    pcMovement()
}

function pcMovement(){
    if(pc === 1){
        alert("La pc a elegido piedra")
        combatComparative()
    }else if (pc === 2){
        alert("La pc a elegido Papel")
        combatComparative()
    }else if(pc === 3){
        alert("La pc a elegido tijera")
        combatComparative()
    }
}

function combatComparative(){
    if(eleccion === 1 && pc === 1 || eleccion === 3 && pc === 3 || eleccion === 3 && pc === 3 ){
        alert("HA SIDO UN EMPATE🙀")
    }
    else if(eleccion === 1 && pc === 2 || eleccion === 2 && pc === 3 || eleccion === 3 && pc === 1){
        alert("HAS PERDIDO, SUERTE PARA LA PROXIMA😿")
    }
    else{
        alert("HAS GANADO, FELICIDADES😼😺")
    }
}
