const contenidoNotebooks = document.querySelector('.container');


let productosNotebooks = []; // Define y asigna los productos de notebooks

const getProducts = async () => {
    const response = await fetch("../../json/notebooks.json");
    const data = await response.json();
    data.forEach((product) => {
        // Agrega los productos a las categorías correspondientes
          if (product.categoria === 'notebooks') {
            productosNotebooks.push(product);
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
        contenidoNotebooks.append(content);
    });
    
    // Llama a mostrarProductosSegunFiltro después de obtener los productos
    mostrarProductosSegunFiltro('', 'notebooks'); 
};

function mostrarProductosSegunFiltro(filtro, categoria) {
    const contenido = document.querySelector('.container');
    contenido.innerHTML = '';

    let productos;

   
     if (categoria === 'notebooks') {
        productos = productosNotebooks;
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

const filtroProductosNotebooksInput = document.querySelector('#campo-busqueda-notebooks');
const botonBuscarNotebooks = document.querySelector('#btn-campo-busqueda-notebooks');
botonBuscarNotebooks.addEventListener('click', () => {
    const filtro = filtroProductosNotebooksInput.value;
    mostrarProductosSegunFiltro(filtro, 'notebooks');
});

const formularioBusquedaNotebooks = document.querySelector('#formulario-busqueda-notebooks');

formularioBusquedaNotebooks.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    
    const filtro = filtroProductosNotebooksInput.value;
    mostrarProductosSegunFiltro(filtro, 'notebooks');
});
// Llama a la función getProducts para cargar los productos al principio
getProducts();
