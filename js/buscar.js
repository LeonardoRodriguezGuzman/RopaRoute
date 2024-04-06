const inputBusqueda = document.getElementById('busqueda');
const listaOpciones = document.getElementById('listaOpciones');
const btnBuscar = document.getElementById('btnBuscar');

// Función para actualizar la lista de opciones
function actualizarListaOpciones(textoBusqueda) {
  // Limpiar la lista de opciones
  listaOpciones.innerHTML = '';

  // Obtener las opciones
  const opciones = ['Pantalones', 'Camisas formales', 'Tacos', 'Moroleón'];

  // Filtrar las opciones que coincidan con el texto de búsqueda
  const opcionesFiltradas = opciones.filter(opcion => opcion.toLowerCase().includes(textoBusqueda.toLowerCase()));

  // Agregar las opciones a la lista
  opcionesFiltradas.forEach(opcion => {
    const elementoLista = document.createElement('li');
    elementoLista.classList.add('list-group-item');
    elementoLista.innerText = opcion;
    listaOpciones.appendChild(elementoLista);
  });
}

// Actualizar la lista de opciones cuando el usuario escribe en el campo de texto
inputBusqueda.addEventListener('input', () => {
  const textoBusqueda = inputBusqueda.value;
  actualizarListaOpciones(textoBusqueda);
});

// Buscar la opción seleccionada cuando el usuario hace clic en el botón "Buscar"
btnBuscar.addEventListener('click', () => {
  const opcionSeleccionada = listaOpciones.querySelector('.active');
  if (opcionSeleccionada) {
    // Obtener el texto de la opción seleccionada
    const textoOpcionSeleccionada = opcionSeleccionada.innerText;

    // Realizar la búsqueda con el texto de la opción seleccionada
    console.log(`Realizar búsqueda con el texto: ${textoOpcionSeleccionada}`);
  }
});

// Activar la primera opción de la lista al iniciar
listaOpciones.firstElementChild.classList.add('active');

// Actualizar la lista de opciones al iniciar
actualizarListaOpciones('');
