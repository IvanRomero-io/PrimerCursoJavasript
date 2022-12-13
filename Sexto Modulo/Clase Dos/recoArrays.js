var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo:2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo:1700}
]
//Busca un ana caracteristica EXACTA de un elemento
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.costo === 3000
})
//forEach es que cada elemento de este array lo va a procesar y va a realizar una accion asignada, como en este caso asigna que te de su nombre con un console.log
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})
//Evalua un "request" y devuelve un true o un false dependiendo de lo pedido
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})


