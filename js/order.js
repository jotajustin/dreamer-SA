function filterProducts() {
    const searchInput = document.getElementById('searchbar-box').value.trim().toLowerCase();
    const productos = document.querySelectorAll('.boxflex-1-pp');
    let hasResults = false;
    let results = [];

    productos.forEach(producto => {
        const name = producto.getAttribute('data-name').toLowerCase();

        if (name.includes(searchInput) || searchInput === "") {
            producto.style.display = 'block';
            hasResults = true;
            results.push(producto.getAttribute('data-id')); // Guarda el ID del producto
        } else {
            producto.style.display = 'none';
        }
    });

    const noResultsMessage = document.getElementById('no-results');
    if (hasResults) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }

    // Guardar los resultados en localStorage
    localStorage.setItem('searchResults', JSON.stringify(results));
}

function loadFilters() {
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));
    if (searchResults) {
        const productos = document.querySelectorAll('.boxflex-1-pp');
        productos.forEach(producto => {
            if (searchResults.includes(producto.getAttribute('data-id'))) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }
}

function setupEventListeners() {
    document.getElementById('searchbar-box').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const loadingIndicator = document.getElementById('loading-search');
            if (loadingIndicator) {
                loadingIndicator.style.display = 'block'; // Mostrar el indicador de carga

                // Ocultar resultados después de 1.5 segundos
                setTimeout(() => {
                    filterProducts();
                    loadingIndicator.style.display = 'none'; // Ocultar el indicador de carga
                }, 1500); // Esperar 1.5 segundos
            }
        }
    });
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    loadFilters();
    setupEventListeners();
    filterProducts(); // Aplicar los filtros cargados
});

function contarDivsVisibles() {
    const divs = document.getElementsByClassName('boxflex-1-pp');
    let count = 0;

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        const style = window.getComputedStyle(div);

        if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
            count++;
        }
    }

    return count;
}

// Función para manejar la búsqueda
function manejarBusqueda(event) {

    setTimeout(() => {
    if (event.key === 'Enter') {
        const resultado = contarDivsVisibles();
      
        const resultadoElemento = document.getElementById('resultadoElement');
        resultadoElemento.textContent = `Productos relacionados con tu búsqueda: ${resultado}`;
  
    }
}, 2000);
}

// Añadir evento de escucha a la barra de búsqueda
const searchBar = document.getElementById('searchbar-box');
searchBar.addEventListener('keypress', manejarBusqueda);