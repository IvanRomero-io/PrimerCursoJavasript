//Scope global
var nombre = "ivan"


//Scope local

function fun(){
    var apellido = "romero"
    return nombre + " " + apellido
}

//EL SCOPE GLOBAL SON LAS VARIABLES QUE ESTAN  AFUERA DE UNA FUNCION Y LAS 
// LOCALES LAS QUE ESTAN ADENTRO DE UNA, NO SE PUEDEN LLAMAR VARIABLES QUE ESTAN ADENTRO DE UNA SCOPE LOCAL, PERO 
// SI SE PUEDEN LLAMAR DE UNA SCOPE LOCAL A UNA GLOBAL,
//EN RESUMEN, LAS VARIBLES QUE ESTAN ADENTRO DE UNA FUNCION, SOLO EXISTEN ALLI.



console.log(fun() + " uno")

console.log(fun() + " dos")
console.log(fun() + " tres")
console.log(fun() + " cuatro")
console.log(fun() + " cinco")