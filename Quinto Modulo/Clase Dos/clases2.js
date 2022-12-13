function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo
    this.annio = annio
}


let autoNuevo = new auto( "Nissan" , "Versa", 2021)
let autoNuevo2 = new auto( "Chevrolet" , "Lumina", 2021)
let autoNuevo3 = new auto( "Hyundai" , "Accent", 2021)

console.log(autoNuevo)

for(let i = 0; i <= 30; i++){

    let autoNuevofun = new auto("Chevrolet", "corvete", 2022)

    console.log(autoNuevofun.marca + " " + i)
}