function encriptar() {
    let texto = document.getElementById("cajaTextoEntrada").value;
    let parrafo = document.getElementById("resultado");
    let muñeco = document.querySelector(".posicion_texto");
    let boton = document.getElementById("botonc");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat")
  
    if (texto.length != 0) {
      document.getElementById("resultado").value = textoCifrado;
      muñeco.classList.add("ocultar");
      boton.disabled = false;
    } else {
        alert("ingresar un texto");
    }
  }
  
function desencriptar() {
    let texto = document.getElementById("cajaTextoEntrada").value;
    let tituloMensaje = document.getElementById("mensaje");
    let parrafo = document.getElementById("resultado").value;
    let muñeco = document.querySelector(".muneco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u")
    
      if (texto.length != 0) {
        document.getElementById("resultado").value = textoCifrado;
        muñeco.classlist.add("ocultar");
        boton.disabled = false;
      } else {
        alert("ingresa un texto");
      }
  }

function copiar() {
  var textoc = document.getElementById("resultado").value;
    navigator.clipboard.writeText(textoc)
    
}
document.getElementById("botonc").addEventListener("click", copiar);


  