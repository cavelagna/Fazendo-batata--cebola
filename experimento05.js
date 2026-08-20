const botao05 = document.getElementById("botao05");
const contador = document.getElementById("contador");
let cliques = 0;

botao05.addEventListener("click", function(){
    cliques++;
    contador.textContent = cliques;
});