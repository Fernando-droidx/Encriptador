



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
   
   

   
} 
//TODO: hacer una funcion que copie el texto encriptado
function copiar(){
    
}
function limpiar(){
    
   
}
