let serie1={
    poster:'chosen.jpeg',

    nome:'The Chosen',

    atorPrincipal:{
        nome:'Jonathan Roumie',
        dataDeNascimento:'1 de julho de 1974',
        nascionalidade:'Estadunidense'
    },

    temporadas:4,
    anoDeLancamento:2017
    

}

let serie2={

    poster:'kroba.jpg',

    nome:'Cobra Kai',

    atorPrincipal:{
        nome:'Xolo Maridueña',
        dataDeNascimento:'9 de junho de 2001',
        nascionalidade:'norte-americano'
    },

    temporadas:5,
    anoDeLancamento:2018
}

let serie3={

    poster:'capaetchau.jpg',

    nome:'La casa de papel',

    atorPrincipal:{ 
        nome:'Úrsula Corberó',
        dataDeNascimento:'11 de agosto de 1989',
        nascionalidade:'Espanhola'
    },

    temporadas:5,
    anoDeLancamento:2017

}

let serie4={

    poster:'flash.jpg',

    nome:'The Flash',

    atorPrincipal:{
        nome:'Grant Gustin',
        dataDeNascimento:'14 de janeiro de 1990',
        nascionalidade:'Estadunidense'
    },

    temporadas:9,
    anoDeLancamento:2014 

}

let serie5={

    poster: 'susu.jpg',

    nome:'Suits (Homens de Terno)',

    atorPrincipal:{
        nome:'Patrick J. Adams',
        dataDeNascimento:'27 de agosto de 1981',
        nascionalidade:'Canadense'
    },

    temporadas:9,
    anoDeLancamento:2011

}

let serie6={

    poster:'trafico.jpeg',

    nome:'Sintonia',

    atorPrincipal:{
        nome:'João Pedro',
        dataDeNascimento:'2 de junho de 2000',
        nascionalidade:'Brasileiro'
    },

    temporadas:4,
    anoDeLancamento:2019

}

let serie7={

    poster:'dhabo.jpeg',

    nome:'Lúcifer',

    atorPrincipal:{
        nome:'Tom Ellis',
        dataDeNascimento:'17 de novembro de 1978',
        nascionalidade:'Britânico'
    },

    temporadas:6,
    anoDeLancamento:2016

}

let serie8={

    poster:'lupin.jpeg',

    nome:'Lupin',

    atorPrincipal:{
        nome:'Omar Sy',
        dataDeNascimento:'20 de janeiro de 1978',
        nascionalidade:'Frances'
    },

    temporadas:3,
    anoDeLancamento:2021

}

let serie9={

    poster:'banks.jpeg',

    nome:'Outer Banks',

    atorPrincipal:{
        nome:'Rudy Pankow',
        dataDeNascimento:'12 de agosto de 1998',
        nascionalidade:'Estadunidense'
    },

    temporadas:3,
    anoDeLancamento:2020

}

let serie10={

    poster:'sem.webp',

    nome:'The 100',

    atorPrincipal:{
        nome:'Eliza Taylor',
        dataDeNascimento:'24 de outubro de 1989',
        nascionalidade:'Australiana'
    },

    temporadas:7,
    anoDeLancamento:2014

}

let top5 = []


top5.push(serie1)
top5.push(serie7)
top5.push(serie2)
top5.push(serie5)
top5.push(serie3)

let lancamento = []

lancamento.push(serie4)
lancamento.push(serie6)
lancamento.push(serie8)
lancamento.push(serie9)
lancamento.push(serie10)



for( let i = 0; i< top5.length;i++) {

    document.write(`
        <div class= "card">
    <img class="foto" src="img/${top5[i].poster}">
            <p> Serie: ${top5[i].nome} </p>
            <p> Ator: ${top5[i].atorPrincipal.nome} </p>
            <p> Nasc. Ator: ${top5[i].atorPrincipal.dataDeNascimento} </p>
            <p> Nascionalidade: ${top5[i].atorPrincipal.nascionalidade} </p>
            <p> Temporadas: ${top5[i].temporadas} </p>
            <p> Lançamento: ${top5[i].anoDeLancamento} </p> 
    
        </div>
    `
    );
    }

    for( let i = 0; i< lancamento.length;i++) {

        document.write(`
            <div class= "card">
        <img class="foto" src="img/${lancamento[i].poster}">
                <p> Serie: ${lancamento[i].nome} </p>
                <p> Ator: ${lancamento[i].atorPrincipal.nome} </p>
                <p> Nasc. Ator: ${lancamento[i].atorPrincipal.dataDeNascimento} </p>
                <p> Nascionalidade: ${lancamento[i].atorPrincipal.nascionalidade} </p>
                <p> Temporadas: ${lancamento[i].temporadas} </p>
                <p> Lançamento:  ${lancamento[i].anoDeLancamento} </p> 
        
            </div>
        `
        );
        }

        