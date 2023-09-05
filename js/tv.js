const contenidoTelevisores = document.querySelector('.div_container');


let productosTelevisores = []; // Define y asigna los productos de televisores

const getProducts = async () => {
    const response = await fetch("tv.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'tv') {
            productosTelevisores.push(product);
        }

        const content = document.createElement('article');
        content.className = "articulos";
        content.innerHTML = `
       
        <div class="contenido">
        <section class="container">
        <article class="card">
            <img class="imagen" src='${product.img}'>
            <p>${product.nombre}</p>
            <p class="precio">${product.price}</p>
            <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
            </article>
            </section>
            </div>
        `;
        contenidoTelevisores.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'tv'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.div_container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'tv') {
        productos = productosTelevisores;
    }

    productos.forEach(product => {
        if (product.nombre.toLowerCase().includes(filtro.toLowerCase())) {
            const content = document.createElement('article');
            content.className = "articulos";
            content.innerHTML = `
            <div class="contenido">
            <section class="container">
            <article class="card">
                <img class="imagen" src='${product.img}'>
                <p>${product.nombre}</p>
                <p class="precio">${product.price}</p>
                <button class="agregarCarrito" data-id="${product.id}">Comprar</button>
                </article>
                </section>
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

filtroProductosTelevisoresInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        const filtro = filtroProductosTelevisoresInput.value;
        mostrarProductosSegunFiltro(filtro, 'tv');
    }
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();
