// Sitio estático sin dependencias. Solo cierra el menú al tocar un enlace en móvil.
document.querySelectorAll('.menu a').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    document.activeElement && document.activeElement.blur();
  });
});
