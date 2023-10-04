/*Ejercicio 1:

Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML
    Métodos recomendados:
    - innerHTML
    - appendChild()
    - createElement()
    - createAttribute()
    - createTextNode()

Ejercicio 1 bis:
Nota (ejercicio avanzado): pensar el caso de añadir datos de un array de tareas de tamaño indeterminado (los datos ya están dentro del array)
["comprar","barrer","alimentar gato","colada"]*/



let lista = document.getElementById("lista")
let opcion1 = lista.appendChild(document.createElement("li"))
let elemento1 = opcion1.appendChild(document.createTextNode("gato"))

let opcion2 = lista.appendChild(document.createElement("li"))
let elemento2 = opcion2.appendChild(document.createTextNode("perro"))


/Ejercicio 1 bis:
Nota (ejercicio avanzado): pensar el caso de añadir datos de un array de tareas de tamaño indeterminado (los datos ya están dentro del array)
["comprar","barrer","alimentar gato","colada"]/

let array = ["comprar","barrer","alimentar gato","colada"];
let lista2 = document.getElementById("lista2")
for (let i = 0; i<array.length; i++){
    lista2.appendChild(document.createElement("li"))
}

let opcionesLista2 = lista2.getElementsByTagName("li")
for (let i = 0; i<array.length; i++){
    let node = document.createTextNode(array[i])
    opcionesLista2[i].appendChild(node)
}