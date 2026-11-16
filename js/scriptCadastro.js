/* Selecionar os elementos que estão no HTML */
const formulario = document.getElementById("formCadastro");

/* Evento de envio */
formulario.addEventListener("submit",function(event) {
        event.preventDefault();
        alert("Produto cadastrado com sucesso!");
        formulario.reset();
    }
);