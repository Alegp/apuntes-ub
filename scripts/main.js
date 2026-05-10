// Navegación entre pestañas
function showSection(sectionId) {
    // Ocultar todas
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    // Mostrar la seleccionada
    document.getElementById(sectionId).classList.add('active');
}

// Filtro de búsqueda (funciona en Apuntes)
function filtrarNotas() {
    const query = document.getElementById('buscador').value.toLowerCase();
    
    // Seleccionamos todos los elementos que contienen información en las 4 secciones
    const elementosAFiltrar = document.querySelectorAll('.card, .guia-item, .plantilla-card, .img-card');

    elementosAFiltrar.forEach(item => {
        const contenido = item.textContent.toLowerCase();
        
        // Si el texto coincide, mostramos el elemento, si no, lo ocultamos
        if (contenido.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    // Opcional: Si el buscador está vacío, asegúrate de que se vea todo correctamente
    if (query === "") {
        elementosAFiltrar.forEach(item => item.style.display = "block");
    }
}

// Función para cambiar de idioma en la tarjeta
function cambiarIdioma(btn, lang) {
    // 1. Encontrar la tarjeta (card) donde se ha hecho click
    const card = btn.closest('.plantilla-card');
    
    // 2. Cambiar el atributo de idioma de la tarjeta
    card.setAttribute('data-lang', lang);
    
    // 3. Actualizar los botones (quitar clase active de todos y ponerla al clickado)
    const botones = card.querySelectorAll('.btn-lang');
    botones.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Función de copiar mejorada
// Función de copiar respetando saltos de línea y formato
function copyText(btn) {
    const card = btn.closest('.plantilla-card');
    const lang = card.getAttribute('data-lang');
    
    // Seleccionamos el elemento pre del idioma activo
    const textElement = card.querySelector(`.${lang}-text`);
    
    // Al usar .textContent sobre un <pre> se extrae el texto respetando saltos de línea exactos
    const text = textElement.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "¡Copiado!";
        btn.style.backgroundColor = "#2ecc71";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
        }, 1500);
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });
}

// La función de navegación que ya tenías
function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

//Funcion para limpiar el buscador
function limpiarBuscador() {
    const buscador = document.getElementById('buscador');
    buscador.value = ""; // 1. Vaciamos el input
    
    // 2. Buscamos todos los elementos que el filtro suele ocultar
    const elementos = document.querySelectorAll('.card, .guia-item, .plantilla-card, .img-card');
    
    // 3. Los volvemos a mostrar todos
    elementos.forEach(item => {
        item.style.display = ""; // Usamos "" para que recupere su estilo original del CSS
    });
}

























// function filtrarNotas() {
//     const query = document.getElementById('buscador').value.toLowerCase();
//     const cards = document.querySelectorAll('.card');

//     cards.forEach(card => {
//         const content = card.textContent.toLowerCase();
//         card.style.display = content.includes(query) ? "block" : "none";
//     });
// }
