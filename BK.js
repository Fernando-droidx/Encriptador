
function Hola(saludo){
    alert(saludo);
}
function encriptar(){
   
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/igm, "enter");
    textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
    textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
    textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
    textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    
    
}

//TODO:el boton tiene que ser capaz de desencriptar 

function desencriptador(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/enter/igm, "e");
    textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
    textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
    textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        
        
} 
//TODO: hacer una funcion que copie el texto encriptado
function copiar(){
    var copiar = document.querySelector("#textoDesencriptado");
    copiar.select();
    document.execCommand("copy");
}



