/* Objetivo -quando clicarmos no botão temos que mostar a imagem de fundo correspodnente
 - passo 1 - dar um jeito de de pegar o elemento HTML  dos botões

 - passo 2 -da um um jeito de identificar o clique do usuario no botão
 
 - passo 3 desmarcar o botão selecionado anterior
 
 - passo 4 marcar o botão clicando com se estivesse selecionada
 
 - passo 5 esconder a imagem de fundo anterior
 
 - passo 6 fazer aparecer imagem de fundo correspondente ao botão clicado
 */

 //- passo 1 - dar um jeito de de pegar o elemento HTML  dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
//- passo 2 -da um um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) =>{
        botao.addEventListener('click', () =>{
            //- passo 3 desmarcar o botão selecionado anterior
            desativarBotaoSelecionado();
            
            // - passo 4 marcar o botão clicando com se estivesse selecionada
            botaoSelecionado(botao);

            // - passo 5 esconder a imagem de fundo anterior
            esconderImagemAtiva();

            //- passo 6 fazer aparecer imagem de fundo correspondente ao botão clicado
            mostrarImagemDeFundo(indice);
        })
    
    })
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function botaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

