

function encriptar() {
    var texto = document.getElementById("cuadro_texto").value.toLowerCase();

    var cifrado = texto.replace(/e/igm,"enter");
    var cifrado = cifrado.replace(/o/igm,"ober");
    var cifrado = cifrado.replace(/i/igm,"imes");
    var cifrado = cifrado.replace(/a/igm,"ai");
    var cifrado = cifrado.replace(/u/igm,"ufat");

    document.getElementById("img_right").style.display = "none";
    document.getElementById("text_info").style.display = "none";
    document.getElementById("result_text").innerHTML = cifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}


function desencriptador() {
    var texto = document.getElementById("cuadro_texto").value.toLowerCase();

    var cifrado = texto.replace(/enter/igm,"e");
    var cifrado = cifrado.replace(/ober/igm,"o");
    var cifrado = cifrado.replace(/imes/igm,"i");
    var cifrado = cifrado.replace(/ai/igm,"a");
    var cifrado = cifrado.replace(/ufat/igm,"u");

    document.getElementById("img_right").style.display = "none";
    document.getElementById("text_info").style.display = "none";

    document.getElementById("result_text").innerHTML = cifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#result_text");
    contenido.select();
    document.execCommand("copy");
    alert("¡Texto Copiado!");
}
