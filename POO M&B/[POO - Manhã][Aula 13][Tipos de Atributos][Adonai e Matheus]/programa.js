// Crie em javascript os objetos desenhados no quadro
// ClienteB e ClienteC


let ClienteB = {

    nome :'Cleiton Rasta',
    cpf: '000.000.000-00',

    endereco:{

        rua:'tal',

        numero:'15',

        bairro:'centro',

        cidade:'Cajueiro',
        
        estado:'AL'
    }    



};

console.log(ClienteB.endereco.cidade);


let ClienteC = {
    nome: 'Maria',

    pedidos: [
        {
            totalProdutos: 320,
            frete: 15   
        },
        {
            totalProdutos: 500,
            frete: 72
        }
    ]


};

console.log(ClienteC.pedidos[1].frete)