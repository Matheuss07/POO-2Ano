//Nome de classe sempre deve começar com letra maiuscula
class ContaDeEnergia{

    // O construtor cria objeto
    constructor(nomeDoTitular, endereço, valorTotal, dataDeVencimento, consumo, contaContrato){
        //nos parênteses definimos as entradas

        
        this.nomeDoTitular = nomeDoTitular;
        this.endereço = endereço;
        this.valorTotal = valorTotal;
        this.dataDeVencimento = dataDeVencimento;
        this.consumo = consumo;
        this.contaContrato = contaContrato;

    }

    exibirDados(){
        console.log(`Nome: ${this.nomeDoTitular} --> ${this.endereço}
        Data de vencimento: ${this.dataDeVencimento} Cosumo: ${this.consumo}
        Conta contrato: ${this.contaContrato} Valor: ${this.valorTotal}`
        
        );
    
        
                }
}

class ContaDeAgua{

    // O construtor cria objeto
    constructor(nomeDoTitular, endereço, valorTotal, dataDeVencimento, consumoDiario, contaContrato){
        //nos parênteses definimos as entradas

        
        this.nomeDoTitular = nomeDoTitular;
        this.endereço = endereço;
        this.valorTotal = valorTotal;
        this.dataDeVencimento = dataDeVencimento;
        this.consumoDiario = consumoDiario;
        this.contaContrato = contaContrato;     

    }

    exibirDados(){
        console.log(`Nome: ${this.nomeDoTitular} --> ${this.endereço}
        Data de vencimento: ${this.dataDeVencimento} Cosumo: ${this.consumoDiario}
        Conta contrato: ${this.contaContrato} Valor: ${this.valorTotal}`
        
        );
    
        
                }
}
