const carrito = [];
let totalCarrito;
const contenedorProductos = document.getElementById("contenedor-productos")


function renderizarProds(){
    for(const producto of productos){
       contenedorProductos.innerHTML += ` <section class="py-5 text-center container"> 
       <div class="album py-5 bg-light text-center">
       <div class="container">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 r">
       <div class="col ">
       <div class="card shadow-sm ">
       <img src=${producto.foto} class=class="bd-placeholder-img card-img-top" alt="...">
       <div class="card-body ">
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




    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })


}

renderizarProds()

function agregarAlCarrito(productoComprado){
    carrito.push(productoComprado);
    console.table(carrito);
    alert("Producto: "+productoComprado.nombre+" agregado al carrito!");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.nombre}</td>
            <td>${productoComprado.precio}</td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;
}

    

/*const botonPagar = document.getElementById("boton-comprar")
    botonPagar.addEventListener("click",function (){
        vac

        
        
    })


//stockProductos.forEach((producto) =>  {
//    const div = document
*/