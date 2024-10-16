function desenharCarrinhoDeCompras(carrinho, containerHTML, totalHTML){
    
    containerHTML.innerHTML ='';

    for(let i = 0; i < carrinho.listaDeProdutos.length; i++){

        containerHTML.innerHTML +=`
        <div class='card'>
        <span> ${carrinho.listaDeProdutos[i].id}</span>
        <span> ${carrinho.listaDeProdutos[i].descricao}</span>
        <span> ${carrinho.listaDeProdutos[i].marca}</span>
        <span> R$ ${carrinho.listaDeProdutos[i].precoUnitario}</span>

        </div>`;
    }

    totalHTML.innerHTML = `Total: R$ ${carrinho.calcularTotal()}`
}