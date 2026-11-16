/* Selecionar os elementos que estão no HTML */
const contador = document.querySelector('#contador');
const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
const botao3 = document.querySelector('#botao3');
const botao_esvaziar = document.querySelector('#esvaziar');

/* Mudança no valor do carrinho */
contadorCarrinho = 0;

botao1.addEventListener('click', function() {
    contadorCarrinho++;

    contador.textContent = contadorCarrinho;
})

botao2.addEventListener('click', function() {
    contadorCarrinho++;

    contador.textContent = contadorCarrinho;
})

botao3.addEventListener('click', function() {
    contadorCarrinho++;

    contador.textContent = contadorCarrinho;
})

botao_esvaziar.addEventListener('click', function() {
    contadorCarrinho = 0;

    contador.textContent = contadorCarrinho;
})