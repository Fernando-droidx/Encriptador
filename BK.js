let campoTexto;
let resultado;
function Hola(saludo){
    alert(saludo);
}


function encriptador() {
    campoTexto = document.getElementById("entrada");
    resultado = document.getElementById("resultado");
    resultado.value = campoTexto.value;
}

function limpiar(){
    campoTexto.value=" ";
    resultado.value = " ";

    
    
}
