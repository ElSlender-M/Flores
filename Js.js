// Obtener el ícono de hamburguesa y el menú de enlaces
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelector('.menu-links');

// Cuando se haga clic en el ícono de hamburguesa, alternamos la clase "active"
menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});
 // Obtener elementos del DOM
 const imagenClick = document.getElementById('imagen-click');
 const modal = document.getElementById('modal');
 const modalClose = document.getElementById('modal-close');

 // Mostrar el modal al hacer clic en la imagen
 imagenClick.addEventListener('click', () => {
   modal.style.display = 'block';
 });

 // Cerrar el modal al hacer clic en la "X"
 modalClose.addEventListener('click', () => {
   modal.style.display = 'none';
 });

 // Cerrar el modal al hacer clic fuera del contenido
 window.addEventListener('click', (event) => {
   if (event.target == modal) {
     modal.style.display = 'none';
   }
 });
 