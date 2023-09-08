const contenidoTecnologia = document.querySelector('.container');


let productosTecnologia = []; // Define y asigna los productos de electrodomesticos

const getProducts = async () => {
    const response = await fetch("../json/categoriaTecnologiaPag2.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'tecnologia') {
            productosTecnologia.push(product);
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
        contenidoTecnologia.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'tecnologia'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'tecnologia') {
        productos = productosTecnologia;
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

const filtroProductosTecnologiaInput = document.querySelector('#campo-busqueda-tecnologia');
const botonBuscarTecnologia = document.querySelector('#btn-campo-busqueda-tecnologia');
botonBuscarTecnologia.addEventListener('click', () => {
    const filtro = filtroProductosTecnologiaInput.value;
    mostrarProductosSegunFiltro(filtro, 'tecnologia');
});

const formularioBusquedaTecnologia = document.querySelector('#formulario-busqueda-tecnologia');

formularioBusquedaTecnologia.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    
    const filtro = filtroProductosTecnologiaInput.value;
    mostrarProductosSegunFiltro(filtro, 'tecnologia');
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();