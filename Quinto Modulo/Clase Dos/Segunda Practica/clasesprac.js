let autos = []
let cantidadAutos = 0
let cantidadDeAutosRegistrados = 1

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo
    this.annio = annio
}

cantidadAutos = parseInt(prompt("How many cars do you want to register"))

while(cantidadDeAutosRegistrados <= cantidadAutos){
    let varMarca = prompt("Auto n#" + cantidadDeAutosRegistrados + "- Marca")
    let varModelo = prompt("Auto n#" + cantidadDeAutosRegistrados + "- Modelo")
    let varAnnio = prompt("Auto n#" + cantidadDeAutosRegistrados + "- Año")

    let autoNuevo = new auto(varMarca, varModelo, varAnnio)

    console.log(autoNuevo)

    autos.push(autoNuevo)

    cantidadDeAutosRegistrados++
}


