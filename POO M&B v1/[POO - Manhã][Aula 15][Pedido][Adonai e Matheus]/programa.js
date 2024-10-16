let pedido = {

    numero:108,

    clientes:{

        cliente: "teteu",
        cpf: "777.777.777.67",
        endereço: 'Rua das Árvores, n°1'

    },

    produtos:[

        {
            nome: 'Capacete',
            preçoUni:500,
            quant: 1
        },
        {
            nome: 'Cotoveleira',
            preçoUni:'R$' + 85 + ',00',
            quant: 2

        }

    ]



}

console.log(pedido.produtos[0])