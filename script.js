// script.js

let index = 0;
const imagenes = document.querySelectorAll('.carrusel img');

function mostrarSiguienteImagen() {
  imagenes[index].classList.remove('activo');
  index = (index + 1) % imagenes.length;
  imagenes[index].classList.add('activo');
}

setInterval(mostrarSiguienteImagen, 3000); // Cambia cada 3 segundos
