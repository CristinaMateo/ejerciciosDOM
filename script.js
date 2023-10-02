/***1 -** Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible
 * hacer un botón normal
 * hacer un párrafo 
 * usar click
 * toggle/dos acciones para aparecer y desaparecer
 * 
 * 
 * 

**2 -** Hacer que con onmouseover y onmouseout, se muestre/esconda el título de una foto cuando pases el raton sobre dicha foto

**3 -** Añadir dos elementos `<li>` a un `<ul>`, y unirlos al DOM de tu página HTML
	Usar:
	- innerHTML
	- appendChild()
	- createElement()
	- createAttribute()
    	- createTextNode()
*/

//1
function mostrar() {

    if (document.getElementById("textParagraph").innerHTML ==""){
      document.getElementById("textParagraph").innerHTML = "Este es un párrafo que se esconderá y mostrará al pulsar el botón.";
    }
    else{ // Fecha pintada previamente
      document.getElementById("textParagraph").innerHTML = "";
    }
  }
  
  document.getElementById("toggleButton").addEventListener("click", mostrar);

  //2

  function siTitulo() {
    document.getElementById("titulo").innerHTML = "Título de imagen";
  }


  function noTitulo() {
    document.getElementById("titulo").innerHTML ="";
	
  }
  document.querySelector("#michi").addEventListener("mouseout", noTitulo);
  
  document.querySelector("#michi").addEventListener("mouseover", siTitulo);


  //3

  function hacerLista(){
	const contenedor = document.getElementById("div1");
	const lista = document.createElement("ul")
	const elemento =document.createElement("li")
	const elementoDos =document.createElement("li")
	const node = document.createTextNode("Patatas");
	const nodeDos = document.createTextNode("Naranjas");


	contenedor.appendChild(lista)
	lista.appendChild(elemento);
	lista.appendChild(elementoDos);
	elemento.appendChild(node);
	elementoDos.appendChild(nodeDos);
}

document.getElementById("crear").addEventListener("click", hacerLista)


