function cambiar_texto(){
    document.getElementById("edit_acercaDe").style.display="block";
    let texto = document.getElementById("texto-acercaDe").innerText
    console.log(texto)
}

function cargar_texto(texto_nuevo){
    document.getElementById("texto-acercaDe").innerText= texto_nuevo
}


document.getElementById("edit_acercaDe").addEventListener("keydown", miFuncion);

function miFuncion(event) {
    if (event.keyCode == 13){
  document.getElementById("edit_acercaDe").style.display="none";
}}