var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo:2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo:1700}
];
//regresa los elementos que tengan el valor que se pide o menor
// var articulosFiltrados = articulos.filter(function(articulo){
//     return articulo.costo <= 500
// })

//Llama los nombres de los articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

