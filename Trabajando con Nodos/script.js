/* const imagenes = document.querySelectorAll(".imagen");
const links = document.querySelectorAll(".enlace");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].src = prompt(`Ingrese la url de la imagen N° ${i + 1}`);
  links[i].href = imagenes[i].src;
  links[i].target = "_blank";
} */

/* ETAPA 3
- Nodo padre: un contenedor de tipo div, aunque no es el padre directo. Este contiene divs que dan estilo a la tarjeta contenedora del link
- Nodo hijo repetitivo: a (dentro de un div)
- Explicación: crear todo el contenido del contenedor o del body inclusive y luego ubicar las fuentes con variables.
se puede inclusive crear una variable para cada uno de los atributos de las etiquetas para crear un DOM dinamico.
*/

const datosImagenes = [
  {
    src: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
    alt: "Gatito gris",
  },
  {
    src: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    alt: "Gatito bonito",
  },
  {
    src: "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_680",
    alt: "Gatito naranja",
  },
];

const contenedor = document.querySelector(".contenedor");

datosImagenes.forEach((datoImagen) => {
  //Creamos los elementos
  const tarjetaDiv = document.createElement("div");
  const imagenLink = document.createElement("a");
  const imagen = document.createElement("img");
  
  //Agregamos las clases
  tarjetaDiv.classList.add("tarjeta");
  imagenLink.classList.add("enlace");
  imagen.classList.add("imagen");

  //Establecer los atributos
  imagenLink.target = "_blank";
  imagenLink.href = datoImagen.src;
  imagen.src = datoImagen.src;
  imagen.alt = datoImagen.alt;

  //Anidar los elementos
  imagenLink.appendChild(imagen);
  tarjetaDiv.appendChild(imagenLink);
  contenedor.appendChild(tarjetaDiv);
});
