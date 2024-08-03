//"pegando" elementos do html e colocando em variações:
let inputId = document.getElementById("ipID")
let inputMarca = document.getElementById("ipMarca")
let inputDescricao = document.getElementById("ipDescricao")
let inputPercoUnitario = document.getElementById("ipPrecoUnitario")
let buttonAdicionar = document.getElementById("btnAdicionar")
let containerCards = document.getElementById("containerCards")
let cTotal = document.getElementById("containerTotal")
// Criando o objeto carrinho 

let carrinho = new CarrinhoDeCompras()


//função que sera chamada quando o butão adicionar for clicado:
function quandoClicarNoBotao(){

    let produtoTemporario = new Produto(
        inputId.value,
        '',
        inputDescricao.value,
        inputPercoUnitario.value,
        inputMarca.value
    );

    
    
    //adicionando um fofoqueiro ao botão.
    //sempre que o botão for clicado o fofoqueiro
    // iŕa chamar a função quandoClicarNoBotão.
    carrinho.adicionarProduto(produtoTemporario);
    console.log(carrinho);
    desenharCarrinhoDeCompras(carrinho, containerCards, cTotal);
 
}
buttonAdicionar.addEventListener('click', quandoClicarNoBotao);
