const carrito = [];
let totalCarrito;
const contenedorProductos = document.getElementById("contenedor-productos")


function renderizarProds(){
    for(const producto of productos){
       contenedorProductos.innerHTML += ` <section class="py-5 text-center container"> 
       <div class="album py-5 bg-light">
       <div class="container">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       <div class="col">
       <div class="card shadow-sm">
       <img src=${producto.foto} class=class="bd-placeholder-img card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">${producto.id}</h5>
           <p class="card-text">${producto.nombre}</p>
           <p class="card-text">$ ${producto.precio}</p>
           <button id="btn${producto.id}" class="btn btn-primary">Añadir al carro</button>
           <div class="d-flex justify-content-between align-items-center">
           <div class="btn-group">
       </div>
   </div>

 
       
       ` 
        
    }
}



renderizarProds()



//stockProductos.forEach((producto) =>  {
//    const div = document
//})