if(localStorage.getItem("sesion")!=="activa"){

window.location="login.html";

}

let productos =
JSON.parse(localStorage.getItem("productos")) || [];

document.getElementById("totalProductos")
.innerHTML = productos.length;

let stock = 0;
let valor = 0;

productos.forEach(p=>{

stock += Number(p.cantidad);

valor += Number(p.precio) *
         Number(p.cantidad);

});

document.getElementById("stockTotal")
.innerHTML = stock;

document.getElementById("valorTotal")
.innerHTML = "Q" + valor;

function cerrarSesion(){

localStorage.removeItem("sesion");

window.location="login.html";

}