let campoTexto;
let resultado;
let enc;

function Hola(saludo){
    alert(saludo);
}


function encriptador() {
    campoTexto = document.getElementById("entrada");
    resultado = document.getElementById("resultado");
    
    campoTexto.value = resultado.value;
    
    
}
//TODO:el boton tiene que ser capaz de desencriptar 

function desencriptador(){
    resultado = document.getElementById("resultado");
    campoTexto = document.getElementById("entrada");

    resultado.value = campoTexto.value.tolowerCase();
} 
//TODO: hacer una funcion que copie el texto encriptado
function copiar(){
    
}
function limpiar(){
    campoTexto.value="";
    resultado.value = "";  
}
