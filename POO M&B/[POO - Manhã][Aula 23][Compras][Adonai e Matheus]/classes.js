class Produto{
    constructor(id, foto, descricao, precoUnitario,marca){

            this.id = id
            this.foto = foto
            this.descricao = descricao
            this.precoUnitario = precoUnitario
            this.marca = marca

    }
}

class CarrinhoDeCompras{
    constructor(){
        this.data = new Date
        this.listaDeProdutos = []
    }

    adicionarProduto(produto){
        if(produto instanceof Produto){
            this.listaDeProdutos.push(produto);
            }       else{
                        console.error('Só é possivel adicionar objetos da classe Produto')
            }
            
    }

    

    calcularTotal(){
        let total = 0
        for( let i = 0; i < this.listaDeProdutos.length; i++){

            total += Number(this.listaDeProdutos[i].precoUnitario)
        }
        return total;

    }
}