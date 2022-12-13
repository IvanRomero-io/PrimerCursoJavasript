let numArray = [1, 2, 3, 4, 5]

function newNum(){
    //se agregan elementos
    numArray.push(6, 7)
    //reviso que esten los numeros agregados
    console.log(numArray)
}

newNum()
//ACA ME AGARRE EL PRIMER ELEMENTO DEL ARRAY Y LO METI EN LA VARIABLE, ESTO FUE CON EL ATRIBUTO ".SHIFT"
let shiftArray = numArray.shift()

console.log(shiftArray)

console.log(numArray)

//AHORA CON ESE ARRAY VAMOS A INVOCAR EL ATRIBUTO QUE AGARRA EL ULTIMO ELEMENTO Y LO METE EN LA VARIABLE
let popArray = numArray.pop()

console.log(popArray)

console.log(numArray)

//---------------------------------AHORA CON NOMBRES
console.log("--------------------------------------")

//Array Inicial
let txtArray = ["Ana", "Juan", "Diego", "Lautaro"]

//Funcion
function addCharacters(){
    //Agrego Elementos
    txtArray.push("Chris", "Maria")
    //Reviso el Array que Ahora Tiene los Numeros Agregados
    console.log(txtArray)
}

addCharacters()
//Lo mismo que con el de numero pero ahora con los nombre, meti el primer elemento en una variable
let nameShiftArray = txtArray.shift()

console.log(nameShiftArray)

console.log(txtArray)

//Otravez lo mismo que con los numeros, Agarra el ultimo elemto y lo mete en la variable

let namePopArray = txtArray.pop()

console.log(namePopArray)

console.log(txtArray)

