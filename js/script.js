document.getElementById("agregar").addEventListener("click", function() {
    var elemento = prompt("Ingrese el elemento:");
    if (elemento) {
        var lista = document.getElementById("lista");
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = elemento;
        lista.appendChild(nuevoElemento);
    } else {
        alert("Por favor ingrese un elemento válido.");
    }
});

console.log('Hola');