function login(){

let usuario =
document.getElementById("usuario").value;

let password =
document.getElementById("password").value;

if(usuario==="admin" && password==="12345"){

localStorage.setItem("sesion","activa");

window.location="index.html";

}else{

alert("Datos incorrectos");

}

}