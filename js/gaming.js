const contenidoGaming = document.querySelector('.container');


let productosGaming = []; // Define y asigna los productos de televisores

const getProducts = async () => {
    const response = await fetch("../../json/gaming.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'gaming') {
            productosGaming.push(product);
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
        contenidoGaming.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'gaming'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'gaming') {
        productos = productosGaming;
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

filtroProductosGamingInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        const filtro = filtroProductosGamingInput.value;
        mostrarProductosSegunFiltro(filtro, 'gaming');
    }
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();