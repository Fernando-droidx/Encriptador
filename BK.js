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
//todo


function limpiar(){
    campoTexto.value="";
    resultado.value = "";  
}
