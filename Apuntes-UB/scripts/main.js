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

// Función Copiar al portapapeles
function copyText(button) {
    const container = button.closest('.plantilla-box');
    const text = container.querySelector('.text-to-copy').innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = "¡Copiado!";
        button.style.backgroundColor = "#10b981"; // Verde

        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = "#2563eb"; // Azul original
        }, 1500);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
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