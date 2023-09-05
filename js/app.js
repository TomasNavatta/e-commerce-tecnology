
//carrito vacio para agrear las cosas luego
let articulosCarrito = []

//selccionar el contenedor padre dond ese encuentran los productos
const listaProductos = document.querySelector(".div_container")
//console.log(listaProductos)

// selecionar el carrito
const carrito = document.querySelector("#carrito")
//console.log(carrito)

//contador productos
const countProducts = document.querySelector('#contador-productos')

//seleccion del boton vaciar carrito
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
//console.log(vaciarCarritoBtn)

// seleccionar l lista carrito tbody para agregar los nuevos productos al carrito
const contenedorCarrito = document.querySelector("tbody")
//console.log(contenedorCarrito)

//total pagar carrito

const totalPagar = document.querySelector(".total_pagar")

//hr

const hr = document.querySelector(".hr_carrito")
const hrbtn = document.querySelector(".hr_carritobtn")



//mostra info del carrito vacio

const mostrarInfo = document.querySelector(".mostrarInfo")


// finalizar compra
const finalizarCompra = document.querySelector(".finalizar_compra")

finalizarCompra.addEventListener(`click`, ()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada con exito',
        showConfirmButton: false,
        timer: 1500
      })
      vaciarCarrito()
})



//evnto para guardar el carrito cuando se recare la web
document.addEventListener('DOMContentLoaded', ()=>{
    if(JSON.parse(localStorage.getItem('carrito')) == null){
        articulosCarrito = []
        console.log(articulosCarrito)
    }
    else{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
        console.log(articulosCarrito)

    }
    carritoHTML()
})



//eventos 
listaProductos.addEventListener('click', agregarProducto) 
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
carrito.addEventListener('click', eliminarProducto)

// eliminar producto
function eliminarProducto(e){
    e.preventDefault();
    //console.log(e.target.parentElement)
    if(e.target.classList.contains('borrarProducto')){
        const producto = e.target.parentElement.parentElement
        const productoID = producto.querySelector('.borrarProducto').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(producto => producto.id != productoID);

        carritoHTML()
    }
}

// agregar producto
function agregarProducto(e){
    e.preventDefault()
    if(e.target.classList.contains('agregarCarrito')){
        const producto = e.target.parentElement.parentElement
        //console.log(producto)
        leerDatosProducto(producto)

    }
}

// Selección del campo de búsqueda y botón de búsqueda
const campoBusqueda = document.querySelector('#campo-busqueda');
const btnBusqueda = document.querySelector('#btn-campo-busqueda');
const formularioBusqueda = document.querySelector('#formulario-busqueda');

// Selección de los elementos que se filtrarán
const productos = document.querySelectorAll('.card');

// Agregar un evento al botón de búsqueda para filtrar productos
btnBusqueda.addEventListener('click', filtrarProductos);

// Agregar un evento al formulario para evitar el envío por defecto
formularioBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
});


// Agregar un evento al botón de búsqueda para filtrar productos
btnBusqueda.addEventListener('click', filtrarProductos);

// Agregar un evento al formulario para evitar el envío por defecto
formularioBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
});






function filtrarProductos() {
    const textoBusqueda = campoBusqueda.value.toLowerCase();

    productos.forEach(producto => {
        const nombreProducto = producto.querySelector('.contenido p').textContent.toLowerCase();
        
        // Comprobar si el nombre del producto incluye el texto de búsqueda
        if (nombreProducto.includes(textoBusqueda)) {
            producto.style.display = 'block'; // Mostrar el producto si coincide
        } else {
            producto.style.display = 'none';  // Ocultar el producto si no coincide
        }
         // Si el campo de búsqueda está vacío, mostrar todos los productos
    if (campoBusqueda.value === '') {
        mostrarTodosLosProductos();
    }
    });


}



//seleccionar los datos del producto que qeuremos que se muestre en el carrito
function leerDatosProducto(i){
    const infoProducto = {
        img: i.querySelector('img').src,
        title: i.querySelector('p').textContent,
        price: i.querySelector('.precio').textContent,
        id: i.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoProducto)
    if(articulosCarrito.some(item => item.id === infoProducto.id)){
       const productos = articulosCarrito.map(producto =>{
        if(producto.id == infoProducto.id){
            let cantidad = parseInt(producto.cantidad);
            cantidad ++;
            producto.cantidad = cantidad;
            return producto;
        }
        else{
            return producto;
        }

    })
    articulosCarrito = productos.slice();
       }
    else{
        articulosCarrito.push(infoProducto)

    }
    
    //console.log(articulosCarrito)
    carritoHTML()

}

// mostrar los datos del producto


function carritoHTML(){
    if(!articulosCarrito.length){
        mostrarInfo.classList.remove(`hidden`)
        totalPagar.classList.add(`hidden`)
        hr.classList.add(`hidden`)
        hrbtn.classList.add(`hidden`)
        finalizarCompra.classList.add(`hidden`)
        vaciarCarritoBtn.classList.add(`hidden`)
    } else{
        mostrarInfo.classList.add(`hidden`)
        hr.classList.remove(`hidden`)
        hrbtn.classList.remove(`hidden`)
        totalPagar.classList.remove(`hidden`)
        finalizarCompra.classList.remove(`hidden`)
        vaciarCarritoBtn.classList.remove(`hidden`)
    }
    let precioTotal = 0 
    let totalOfProducts = 0;
    limpiarCarrito();
    articulosCarrito.forEach(producto =>{
        const fila = document.createElement('tr')
        fila.innerHTML = `
          <td> <img src= "${producto.img}"  width="125"/> </td>
             <td><p>${producto.title} <span class="borrarProducto" data-id="${producto.id}"> 🗑️ </span></p>   
             <p> <span class="cantidad_carrito"><span class="signo_menos">➖</span>${producto.cantidad}<span class="signo_mas">➕</span></span><span class="precio_carrito">${producto.price}</span></p>    
             </td>
        `;
        contenedorCarrito.appendChild(fila)
        const decrese = fila.querySelector('.signo_menos')
        decrese.addEventListener('click', ()=>{
            if(producto.cantidad !== 1){
                producto.cantidad --;
            carritoHTML();

            }
            
        })
        const increse = fila.querySelector('.signo_mas')
        increse.addEventListener('click', ()=>{
        
                producto.cantidad ++;
            carritoHTML();

            
        })


        const precioProducto = parseFloat(producto.price.replace('$', '').replace(',', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '')); 
        const precioSubtotal = producto.cantidad * precioProducto;
        precioTotal += precioSubtotal;
        fila.querySelector('.precio_carrito').textContent = `$${precioSubtotal.toLocaleString('es-ES')}`;
        totalOfProducts = totalOfProducts + producto.cantidad;
        
    })
    totalPagar.innerHTML = `Total: $${precioTotal.toLocaleString('es-ES')}`;
    countProducts.innerText = totalOfProducts;
    sincronizarStorage();

}

//limpiar el carrito asi no se repite el  producto agregado anteriormente cuando queremos agregar otro producto
function limpiarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    
}
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))

}
//boton vaciar carrito
function vaciarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    articulosCarrito = [];
    totalPagar.innerHTML = 'Total: $0';
    countProducts.innerHTML = 0
    sincronizarStorage();
    if(!articulosCarrito.length){
        mostrarInfo.classList.remove(`hidden`)
        totalPagar.classList.add(`hidden`)
        hr.classList.add(`hidden`)
        hrbtn.classList.add(`hidden`)
        finalizarCompra.classList.add(`hidden`)
        vaciarCarritoBtn.classList.add(`hidden`)
        
    } else{
        mostrarInfo.classList.add(`hidden`)
        hr.classList.remove(`hidden`)
        hrbtn.classList.remove(`hidden`)
        totalPagar.classList.remove(`hidden`)
        finalizarCompra.classList.remove(`hidden`)
        vaciarCarritoBtn.classList.remove(`hidden`)
    }
    
    
}
