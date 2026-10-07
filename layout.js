/* Cabecera y pie compartidos: se editan aquí una sola vez y se ven en todas las páginas.
   Uso en el HTML:  <script src="layout.js" data-part="header"></script>
                    <script src="layout.js" data-part="footer"></script>
   Y en <body data-page="inicio | servicios"> para marcar el enlace activo. */
(function () {
  var s = document.currentScript, part = s.dataset.part, page = document.body.dataset.page || '';
  var link = function (id, href, text) {
    return '<a href="' + href + '"' + (page === id ? ' class="active" aria-current="page"' : '') + '>' + text + '</a>';
  };

  var header =
  '<div class="topbar">' +
    '<p class="topbar-text">***Atención 24/7. Cobertura solo en Lima Metropolitana***</p>' +
    '<p class="topbar-location"><span>📍 Lima, Lima, Perú</span>' +
      '<img src="img/flag-pe.svg" alt="Perú" class="flag"><img src="img/flag-us.svg" alt="English" class="flag"></p>' +
  '</div>' +
  '<header class="header"><div class="container header-container">' +
    '<a href="index.html" class="logo"><img src="img/logo.png" alt="Chapa Tu Técnico"></a>' +
    '<div class="header-main">' +
      '<div class="nav-row">' +
        '<nav class="navbar" id="navbar" aria-label="Principal">' +
          '<a href="#" class="login">INICIAR<br>SESIÓN</a>' +
          link('inicio', 'index.html', 'INICIO') +
          '<a href="#">NOSOTROS</a>' +
          link('servicios', 'servicios.html', 'SERVICIOS') +
          '<a href="#">COBERTURA</a><a href="#">SOPORTE</a>' +
        '</nav>' +
        '<a href="#" class="btn-emergency">EMERGENCIA 24/7 <img src="img/whatsapp.png" alt=""></a>' +
      '</div>' +
      '<form class="search-bar" role="search">' +
        '<button type="button" aria-label="Buscar"><img src="img/b.png" alt=""></button>' +
        '<input type="search" placeholder="Ejem. Gasfitero, electricista, etc..." aria-label="Buscar servicio">' +
        '<button type="button" aria-label="Buscar por voz"><img src="img/333.png" alt=""></button>' +
      '</form>' +
    '</div>' +
    '<div class="header-actions">' +
      '<a href="#" class="account"><img src="img/icon-cuenta.svg" alt=""><span>MI CUENTA</span></a>' +
      '<a href="#" class="icon-link" aria-label="Notificaciones"><img src="img/111.svg" alt=""></a>' +
      '<a href="#" class="icon-link" aria-label="Carrito"><img src="img/222.svg" alt=""></a>' +
      '<button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="navbar">☰</button>' +
    '</div>' +
  '</div></header>';

  var footer =
  '<footer class="footer"><div class="container footer-container">' +
    '<div class="footer-col"><h4>Inicio:</h4><ul>' +
      '<li><a href="#">Nosotros</a></li><li><a href="#">Solicitar técnico</a></li><li><a href="#">Iniciar sesión</a></li>' +
      '<li><a href="#">Búsqueda</a></li><li><a href="#">Ofertas</a></li></ul></div>' +
    '<div class="footer-col"><h4>Categoría:</h4><ul>' +
      '<li><a href="#">Gasfitero</a></li><li><a href="electricidad.html">Electricista</a></li><li><a href="#">Línea Blanca</a></li>' +
      '<li><a href="#">Carpintería</a></li><li><a href="#">Otros</a></li></ul></div>' +
    '<div class="footer-col support-col"><h4>Soporte</h4><p>Atención 24/7.</p><p>Consulta a los siguientes datos</p>' +
      '<p><a href="tel:+51998204667"><img src="img/whatsapp.png" alt="Teléfono"> <strong>998 204 667</strong></a></p>' +
      '<p><a href="mailto:chapatutecnico@gmail.com"><img src="img/communication.png" alt="Correo"> <strong>chapatutecnico@gmail.com</strong></a></p></div>' +
    '<div class="footer-col payment-col"><h4>Medios de pago</h4>' +
      '<p class="small">Contamos con varios medios de pago.<br>Paga seguro, paga con confianza</p>' +
      '<div class="payment-icons"><img src="img/pago-mastercard.svg" alt="Mastercard"><img src="img/pago-visa.svg" alt="Visa">' +
      '<img src="img/pago-yape.svg" alt="Yape"><img src="img/pago-plin.svg" alt="Plin"></div></div>' +
    '<a href="#" class="footer-col claim-col"><img src="img/libro-reclamaciones.svg" alt=""><span>Libro de Reclamaciones</span></a>' +
    '<div class="footer-col brand-col"><img src="img/logo.png" alt="Chapa Tu Técnico"><p>Servicios confiables<br>y al instante</p>' +
      '<div class="footer-socials"><a href="#" aria-label="YouTube"><img src="img/youtube.png" alt=""></a>' +
      '<a href="#" aria-label="Facebook"><img src="img/facebook.png" alt=""></a>' +
      '<a href="#" aria-label="Instagram"><img src="img/instagram.png" alt=""></a>' +
      '<a href="#" aria-label="TikTok"><img src="img/tik-tok.png" alt=""></a></div></div>' +
  '</div><p class="footer-bottom">© 2026 | Empresa peruana innovadora</p></footer>';

  s.insertAdjacentHTML('beforebegin', part === 'footer' ? footer : header);
})();
