document.getElementById("agregar").addEventListener("click", function() {
    const elemento = prompt("Ingrese el elemento:");
    if (elemento) {
        const lista = document.getElementById("lista");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = elemento;
        lista.appendChild(nuevoElemento);
    } else {
        alert("Por favor ingrese un elemento válido.");
    }
});
