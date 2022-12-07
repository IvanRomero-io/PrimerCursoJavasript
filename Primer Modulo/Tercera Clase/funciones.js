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


//una difencia en las funciones declarativas y expresivas, es que las declarativas pueden ser llamadas antes de ser
//declaradas abajo, a esto se le llama hoisting.

function solution(valor1, valor2, valor3){
    console.log(typeof valor1)
    console.log(typeof valor2)
    console.log(typeof valor3)
}