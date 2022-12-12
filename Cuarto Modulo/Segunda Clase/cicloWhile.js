var estudiantes = ["Maria", "sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}
//este ciclo saca al primero del array, lo enseña, y continua con el segundo (que paso a ser primero) y asi sucecivamente
//  while(estudiantes.length > 0){
//      console.log(estudiantes);
//      var estudiante = estudiantes.shift()
//     saludarEstudiantes(estudiante)
//  }

//el atributo shift, quita el primer elemento de un array y lo retorna, ese elemento que se quita, se queda en la variable
var saludarCabecilla = estudiantes.shift()
var saludarSegundo = estudiantes.shift()
var saludarTercero = estudiantes.shift()
var saludarCuarto = estudiantes.shift()

console.log(saludarEstudiantes(saludarCabecilla))

console.log(saludarEstudiantes(saludarSegundo))

console.log(saludarEstudiantes(saludarTercero))

console.log(saludarEstudiantes(saludarCuarto))


//como puedes ver en este console log, este array se quedo vacio
console.log(estudiantes)

//el atributo array.pop hace lo mismo pero con el ultimo atributo
