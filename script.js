// Obtener el botón y el contenedor donde se agregarán los elementos dinámicos
const botonAgregar = document.getElementById("boton-agregar");
const contenedorDinamico = document.getElementById("contenedor-dinamico");
// Función para crear y agregar un nuevo elemento dinámico al contenedor
function agregarElemento() {
  const nuevoElemento = document.createElement("h3");
  nuevoElemento.textContent = "¡Soy un nuevo elemento!";
  contenedorDinamico.appendChild(nuevoElemento);
}

// Agregar un event Listener al botón para activar la función al hacer clic
botonAgregar.addEventListener("click", agregarElemento);

// Agregar un event Listener al contenedor para activar el evento en Los eLementos dinámicos
contenedorDinamico.addEventListener("dblclick", (event) => {
  // Verificar si el clic se realizó en un elemento sp> dentro del contenedor
  console.log(event);
  console.log(event.target);
  if (event.target.tagName === "P") {
    // Hacer algo cuando se haga clic en el elemento so> dinámico
    console.log("¡Se hizo clic en un elemento dinámico!");
  }
});
