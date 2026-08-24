const botaoAbrir = document.getElementById("btnAbrirModal");
const modalContainer = document.getElementById("modalContainer");

botaoAbrir.addEventListener("click", function() {
	modalContainer.textContent = "Este é um aviso.";
});