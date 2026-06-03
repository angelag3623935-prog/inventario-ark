let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Cargar al abrir
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
});

// Generar código por categoría
function generarCodigo(categoria){

    let prefijo = "";

    if(categoria === "Consola") prefijo = "CON";
    else if(categoria === "Videojuego") prefijo = "JUE";
    else if(categoria === "Accesorio") prefijo = "ACC";
    else if(categoria === "Servicio Técnico") prefijo = "SER";
    else prefijo = "PROD";

    let contador = localStorage.getItem("contador_" + prefijo) || 0;

    contador++;

    localStorage.setItem("contador_" + prefijo, contador);

    return prefijo + "-" + String(contador).padStart(5,"0");
}

// Guardar producto
function guardarProducto(){

    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    if(nombre.trim() === ""){
        alert("Nombre obligatorio");
        return;
    }

    let producto = {
        codigo: generarCodigo(categoria),
        nombre,
        categoria,
        precio: Number(precio),
        cantidad: Number(cantidad)
    };

    productos.push(producto);

    localStorage.setItem("productos", JSON.stringify(productos));

    limpiar();

    mostrarProductos();
}

// Mostrar tabla
function mostrarProductos(){

    let tabla = document.getElementById("tablaProductos");

    if(!tabla) return;

    tabla.innerHTML = "";

    productos.forEach((p, index) => {

        tabla.innerHTML += `
        <tr>
            <td>${p.codigo}</td>
            <td>${p.nombre}</td>
            <td>${p.categoria}</td>
            <td>Q${p.precio}</td>
            <td>${p.cantidad}</td>
            <td>
                <button onclick="eliminar(${index})">Eliminar</button>
            </td>
        </tr>`;
    });
}

// Eliminar
function eliminar(index){

    productos.splice(index,1);

    localStorage.setItem("productos", JSON.stringify(productos));

    mostrarProductos();
}

// Buscar
function buscarProducto(){

    let texto = document.getElementById("buscar").value.toLowerCase();

    document.querySelectorAll("#tablaProductos tr").forEach(fila => {

        fila.style.display =
        fila.innerText.toLowerCase().includes(texto)
        ? ""
        : "none";
    });
}

// Limpiar inputs
function limpiar(){

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
}