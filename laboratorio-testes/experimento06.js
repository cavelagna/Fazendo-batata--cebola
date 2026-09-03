const botaoAbrir = document.getElementById("btnAbrirModal");
const modalContainer = document.getElementById("modalContainer");

botaoAbrir.addEventListener("click", function() {
	modalContainer.innerHTML = `
		<div class="modal-fundo">
			<div class="modal-caixa">
				<h2>Aviso!</h2>
				<p> Este modal inteiro foi criado com JarvisScript.</p>
				<button id = "btnFecharModal">Fecha</button>
			</div>
		</div>`;
		const botaoFechar = document.getElementById("btnFecharModal");
		botaoFechar.addEventListener("click",function(){
			modalContainer.innerHTML = "";
		})
});