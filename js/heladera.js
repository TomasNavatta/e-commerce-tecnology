const contenidoHeladeras = document.querySelector('.container');


let productosHeladeras = []; // Define y asigna los productos de heladeras

const getProducts = async () => {
    const response = await fetch("../../json/heladeras.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'heladeras') {
            productosHeladeras.push(product);
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
        contenidoHeladeras.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'heladeras'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'heladeras') {
        productos = productosHeladeras;
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

const filtroProductosHeladerasInput = document.querySelector('#campo-busqueda-heladeras');
const botonBuscarHeladeras = document.querySelector('#btn-campo-busqueda-heladeras');
botonBuscarHeladeras.addEventListener('click', () => {
    const filtro = filtroProductosHeladerasInput.value;
    mostrarProductosSegunFiltro(filtro, 'heladeras');
});
const formularioBusquedaHeladeras = document.querySelector('#formulario-busqueda-heladeras');

formularioBusquedaHeladeras.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    
    const filtro = filtroProductosHeladerasInput.value;
    mostrarProductosSegunFiltro(filtro, 'heladeras');
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();
