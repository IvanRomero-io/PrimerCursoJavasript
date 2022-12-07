//declarativas

function miFuncion(){
    alert("prueba")
    return 3;
}

miFuncion();

function saludaraEstudiantes(estudiante){
    console.log(estudiante)
}

function saludarEstudiantes(estudiantes){
    console.log(`Hola ${estudiantes}`);

}

function sumar(a, b){
   var resultado = a + b;
   alert(resultado)
   return resultado;
}

//Expresion

var miFuncionE = function(a, b){

    return a + b;
}

miFuncionE();