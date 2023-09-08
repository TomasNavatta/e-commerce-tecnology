const contenidoGaming2 = document.querySelector('.container');


let productosGaming2 = []; // Define y asigna los productos de gaming

const getProducts = async () => {
    const response = await fetch("../../json/gaming2.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'gaming') {
            productosGaming2.push(product);
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
        contenidoGaming2.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'gaming'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'gaming') {
        productos = productosGaming2;
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

const filtroProductosGamingInput = document.querySelector('#campo-busqueda-gaming');
const botonBuscarGaming = document.querySelector('#btn-campo-busqueda-gaming');
botonBuscarGaming.addEventListener('click', () => {
    const filtro = filtroProductosGamingInput.value;
    mostrarProductosSegunFiltro(filtro, 'gaming');
});

const formularioBusquedaGaming = document.querySelector('#formulario-busqueda-gaming');

formularioBusquedaGaming.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    
    const filtro = filtroProductosGamingInput.value;
    mostrarProductosSegunFiltro(filtro, 'gaming');
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();