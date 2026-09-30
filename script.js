document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interactividad en las tarjetas flotantes del Hero
    const serviceCards = document.querySelectorAll('.service-card-mini');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remueve la clase 'active' de todas las tarjetas
            serviceCards.forEach(c => c.classList.remove('active'));
            // Añade la clase 'active' únicamente a la tarjeta clickeada
            card.classList.add('active');
        });
    });

    // 2. Efecto dinámico en la cabecera principal al hacer scroll
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            // Agrega una sombra suave cuando bajas por la página
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            header.style.transition = 'box-shadow 0.3s ease';
        } else {
            // Quita la sombra al volver arriba
            header.style.boxShadow = 'none';
        }
    });
});