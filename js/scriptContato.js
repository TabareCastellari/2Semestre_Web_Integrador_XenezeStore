/* Selecionar os elementos que estão no HTML */
const formulario = document.getElementById("formContato");

/* Evento de envio */
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    formulario.reset();
});