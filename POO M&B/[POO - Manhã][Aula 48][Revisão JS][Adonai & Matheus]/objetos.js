let lanche1 = {
    nome: 'X-nada',
    tipo: 'Sanduíche',
    foto: 'x-nada.jpg',
    preco: 13

};

let lanche2 = {
    nome: 'X-gato',
    tipo: 'Sanduíche',
    foto: 'xgato.jpeg',
    preco: 15

};

let lanche3 = {
    nome: 'X-dog',
    tipo: 'Sanduíche',
    foto: 'x-dog.jpg',
    preco: 13

};

let lanche4 = {
    nome: 'Kibixinha',
    tipo: 'Salgado',
    foto: 'quibexinha.jpg',
    preco: 6

};


let lanche5 = {
    nome: 'Pastel',
    tipo: 'Salgado',
    foto: 'x-nada.jpg',
    preco: 6

}


let listDeComidas = [];

listDeComidas.push(lanche1) 
listDeComidas.push(lanche2)
listDeComidas.push(lanche3)
listDeComidas.push(lanche4)




for(let i = 0; i< listDeComidas.length;i++){

    console.log(`${listDeComidas[i].nome} ${listDeComidas[i].tipo} --> R$ ${listDeComidas[i].preco}`)
}
 
for( let i = 0; i< listDeComidas.length;i++) {

document.write(`
    <div class= "card">
<img class="foto" src="img/${listDeComidas[i].foto}">
        <p class="nome"> ${listDeComidas[i].nome} </p>
        <p class="tipo"> ${listDeComidas[i].tipo} </p>
        <p class="preco"> R$ ${listDeComidas[i].preco}</p>

    </div>
`
);
}