



function Hola(saludo){
    alert(saludo);
}
function encriptar(){
   
    var frase = document.getElementById("inputText").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

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
