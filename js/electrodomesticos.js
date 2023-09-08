const contenidoElectrodomesticos = document.querySelector('.container');


let productosElectrodomesticos = []; // Define y asigna los productos de electrodomesticos

const getProducts = async () => {
    const response = await fetch("../../json/electrodomesticos.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'electrodomesticos') {
            productosElectrodomesticos.push(product);
        }

        const content = document.createElement('article');
        content.className = "card";
        content.innerHTML = `
       
             <div class="div_container">
             <img class="imagen" src='${product.img}'>
            <div class="contenido">
            <p>${product.nombre}</p>
            <p class="precio">${product.price}</p>
            <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
            </div>
            </div>
           
           
        `;
        contenidoElectrodomesticos.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'electrodomesticos'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'electrodomesticos') {
        productos = productosElectrodomesticos;
    }

    productos.forEach(product => {
        if (product.nombre.toLowerCase().includes(filtro.toLowerCase())) {
            const content = document.createElement('article');
            content.className = "card";
            content.innerHTML = `
          
            
          
            <div class="div_container">
                <div class="contenido">
                <img class="imagen" src='${product.img}'>
                <p>${product.nombre}</p>
                <p class="precio">${product.price}</p>
                <button class="agregarCarrito" data-id="${product.id}">Agregar al carrito</button>
                </div>
                </div>
          
               
                
            `;
            contenido.append(content);
        }
    });
}

const filtroProductosElectrodomesticosInput = document.querySelector('#campo-busqueda-electrodomesticos');
const botonBuscarElectrodomesticos = document.querySelector('#btn-campo-busqueda-electrodomesticos');
botonBuscarElectrodomesticos.addEventListener('click', () => {
    const filtro = filtroProductosElectrodomesticosInput.value;
    mostrarProductosSegunFiltro(filtro, 'electrodomesticos');
});

const formularioBusquedaElectrodomesticos = document.querySelector('#formulario-busqueda-electrodomesticos');

formularioBusquedaElectrodomesticos.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    
    const filtro = filtroProductosElectrodomesticosInput.value;
    mostrarProductosSegunFiltro(filtro, 'electrodomesticos');
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();