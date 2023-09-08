const contenidoTelevisores = document.querySelector('.container');


let productosTelevisores = []; // Define y asigna los productos de tv

const getProducts = async () => {
    const response = await fetch("../../json/tv.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'tv') {
            productosTelevisores.push(product);
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
        contenidoTelevisores.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'tv'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'tv') {
        productos = productosTelevisores;
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

const filtroProductosTelevisoresInput = document.querySelector('#campo-busqueda-tv');
const botonBuscarTelevisores = document.querySelector('#btn-campo-busqueda-tv');
botonBuscarTelevisores.addEventListener('click', () => {
    const filtro = filtroProductosTelevisoresInput.value;
    mostrarProductosSegunFiltro(filtro, 'tv');
});

const formularioBusquedaTv = document.querySelector('#formulario-busqueda-tv');

formularioBusquedaTv.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    
    const filtro = filtroProductosTvInput.value;
    mostrarProductosSegunFiltro(filtro, 'tv');
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();
