var estudiantes = ["maria", "sergio", "rosa", "daniel", "carlos", "juan"];

function saludarEstudiantes(est){
    console.log(`Hola, ${est}`)
};
//SI "i" ES MENOR QUE LA LONGITUD DEL ARRAY, LE SUMA 1 A LA 
// VARIABLE "i", HASTA QUE LLEGE AL FINAL DE LA LONGITUD DE LA VARIABLE CUANDO "i" Y LA LONGITUD SON IGUALES, POR CADA
//CICLO HACE LA ACCION Y SUMA 1
// for(var i = 0; i < estudiantes.length; i++){
//     saludarEstudiantes(estudiantes[i])
// };


// EL VAR SE CONVIERTE EN 0 Y VA A PASAR POR CADA ELEMENTO DEL
//ARRAY, CONVIRTIENDO EL ELEMENTO EN SU VALOR POR CADA CICLO
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
    console.log(estudiante)
}