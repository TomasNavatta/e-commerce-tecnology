const contenidoAllElectrodomestics = document.querySelector('.container');


let productosAllElectrodomestics = []; // Define y asigna los productos de electrodomesticos

const getProducts = async () => {
    const response = await fetch("../json/categoriaElectrodomesticos.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'allElectrodomestics') {
            productosAllElectrodomestics.push(product);
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
        contenidoAllElectrodomestics.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'allElectrodomestics'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'allElectrodomestics') {
        productos = productosAllElectrodomestics;
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

const filtroProductosAllElectrodomesticsInput = document.querySelector('#campo-busqueda-AllElectrodomestics');
const botonBuscarAllElectrodomestics = document.querySelector('#btn-campo-busqueda-AllElectrodomestics');
botonBuscarAllElectrodomestics.addEventListener('click', () => {
    const filtro = filtroProductosAllElectrodomesticsInput.value;
    mostrarProductosSegunFiltro(filtro, 'allElectrodomestics');
});

const formularioBusquedaAllElectrodomestics = document.querySelector('#formulario-busqueda-AllElectrodomestics');

formularioBusquedaAllElectrodomestics.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    
    const filtro = filtroProductosAllElectrodomesticsInput.value;
    mostrarProductosSegunFiltro(filtro, 'allElectrodomestics');
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();