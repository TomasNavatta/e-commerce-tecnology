const contenidoHornos = document.querySelector('.container');


let productosHornos = []; // Define y asigna los productos de televisores

const getProducts = async () => {
    const response = await fetch("../../json/hornos.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'hornos') {
            productosHornos.push(product);
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
        contenidoHornos.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'hornos'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'hornos') {
        productos = productosHornos;
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

const filtroProductosHornosInput = document.querySelector('#campo-busqueda-hornos');
const botonBuscarHornos = document.querySelector('#btn-campo-busqueda-hornos');
botonBuscarHornos.addEventListener('click', () => {
    const filtro = filtroProductosHornosInput.value;
    mostrarProductosSegunFiltro(filtro, 'hornos');
});

filtroProductosHornosInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        const filtro = filtroProductosHornosInput.value;
        mostrarProductosSegunFiltro(filtro, 'hornos');
    }
});

// Llama a la función getProducts para cargar los productos al principio
getProducts();
