/*
  que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

  - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

    - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
    - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
    - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
    - passo 4 - adicionar a classe modo-escuro no body
    - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
  - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
  - passo 6 - verificar se o body já tem a classe modo-escuro
  - passo 7 - remover a classe do modo-escuro do body
  - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

//passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

  //passo 6 - remover a classe do modo-escuro do body
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  console.log(modoEscuroEstaAtivo);

  if (modoEscuroEstaAtivo) {
    //passo 7 - remover a classe do modo-escuro do body
    body.classList.remove("modo-escuro");

    //passo 8 - trocar a imagem do botão de alterar tema pra sol
    imagemBotaoTrocaDeTema.setAttribute("src", "./img personagen/sun.png");

  } else {
    // passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");

    //passo 5 - trocar a imagem do botão de alterar tema pra lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./img personagen/moon.png");
  }
});

/*Para ter codigos limpos e de facil entendimento, usa-se muito o refatoramento de codigo, para facilitar, comprender e diminuir a quantidade de codigo.

no codigo acima

- body.classList.remove("modo-escuro"); 
- body.classList.add("modo-escuro");

Esses dois codigos são parecidos, só tem uma função diferente remove e add. Para facilitar utiliza-se o codigo abaixo.

-body.classList.toggle("modo-escuro");

O toggle tem a mesma função que remove e add, ele facilita a quantidade de linha de codigo.

Mas é bom olha onde colocar, nesse caso esse codigo refatorado coloca-se antes do if, porque isso é algo que vai acontecer sempre, não é se o modo esta ativo ou não. 
*/