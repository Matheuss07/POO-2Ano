//Nome de classe sempre deve começar com letra maiuscula
class Conta{

    // O construtor cria objeto
    constructor(nomeDoTitular, numero, agencia, saldo){
        //nos parênteses definimos as entradas

        
        this.nomeDoTitular = nomeDoTitular;
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;

    }

    exibirDados(){
        console.log(`Nome: ${this.nomeDoTitular} --> R$ ${this.saldo}`)
                }
} 