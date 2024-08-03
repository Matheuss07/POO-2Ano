let celular1 = {
            foto:'Samsung-Galaxy-Z-Fold-4-PNG-1-758x473.jpeg',
            marca:'samsung',
            modelo:'Galaxy Z Fold 4',
            armazenamento: '512GB',
            processador:'Snapdragon 8 Plus Gen 1 Qualcomm',
            ram: '12GB',
            qualidadeCamera:'50 Mp ',
            tipoTela: 'Dynamic AMOLED 2X',
            cor: 'preto',
            cargaBateria: '4400mAh',
            preco: 6.299,
            anoDeLancamento:'2020',
        }



        let celular2 = {
            foto: 'POCOX6PRO.jpeg',
            marca:'Xiaomi',
            modelo:'POCO X6 Pro 5G',
            armazenamento: '512GB',
            processador:'Dimensity 8300-Ultra',
            ram: '12GB',
            qualidadeCamera:'64 Mp ',
            tipoTela: 'AMOLED',
            preco: 2.489,
            cor: 'preto',
            cargaBateria: '5000mAh',
            anoDeLancamento:'2024',
        }



        let celular3 = {
            foto: 'Iphone15ProMax.png',
            marca:'Apple',
            modelo:'iPhone 15 Pro Max',
            armazenamento: '512GB',
            processador:'6 Core 2x performance',
            ram: '8GB',
            qualidadeCamera:'48 Mp ',
            tipoTela: 'Super Retina XDR OLED',
            preco: 7.449,
            cor: 'preto',
            cargaBateria: '4422mAh',
            anoDeLancamento:'2023',
        }

        let celular4 = {
            foto:'moto-g8-power.webp',
            marca:'Motorola',
            modelo:'MOTO G8 POWER',
            armazenamento: '64GB',
            processador:'Snapdragon 665',
            ram: '4GB',
            qualidadeCamera:'16 Mp ',
            tipoTela: 'IPS LCD',
            preco: 1200,
            cor: 'azul',
            cargaBateria: '5000mAh',
            anoDeLancamento:'2020',
        }

        let celular5 = {
            foto:'S22.avif',
            marca:'Samsung',
            modelo:'S22',
            armazenamento: '256GB',
            processador:'Snapdragon 8 Gen 1',
            ram: '8GB',
            qualidadeCamera:'50 Mp ',
            tipoTela: 'Dynamic AMOLED 2X',
            preco: 2799,
            cor: 'Branco',
            cargaBateria: '3700mAh',
            anoDeLancamento:'2022',
        }

        let celular6 = {
            foto: 'Iphone xr.jpeg',
            marca:'Iphone',
            modelo:'xr',
            armazenamento: '256GB',
            processador:'Apple A12 Bionic',
            ram: '3GB',
            qualidadeCamera:'12 Mp ',
            tipoTela: 'IPS LCD',
            preco: 1500,
            cor: 'Branco',
            cargaBateria: '2942mAh',
            anoDeLancamento:'2018',

            
        }

        let celular7 = {
            foto: 'A54.jpg',
            marca:'Samsung',
            modelo:'a54',
            armazenamento: '256GB',
            processador:'Exynos 1380',
            ram: '8GB',
            qualidadeCamera:'32 Mp ',
            tipoTela: 'Super AMOLED',
            preco: 1500,
            cor: 'Branco',
            cargaBateria: '5000mAh',
            anoDeLancamento:'2023',
        }


        let celular8 = {
            foto: 'J7.jpg',
            marca:'Samsung',
            modelo:'J7',
            armazenamento: '16GB',
            processador:'Cortex-A53 SAMSUNG Exynos 7580',
            ram: '1.5GB',
            qualidadeCamera:' 13Mp ',
            tipoTela: 'Super AMOLED',
            preco: 314,
            cor: 'Branco',
            cargaBateria: '3000mAh',
            anoDeLancamento:'2015',
        }

        let celular9 = {
            foto: 'NOTE9S.jpeg',
            marca:'Xiaomi',
            modelo:'note 9s',
            armazenamento: '128GB',
            processador:'Snapdragon 720G Qualcomm',
            ram: '4GB',
            qualidadeCamera:'48 Mp ',
            tipoTela: 'IPS LCD',
            preco: 998,
            cor: 'Azul',
            cargaBateria: '5020mAh',
            anoDeLancamento:'2020',
        }

        let celular10 = {
            foto:'redmi10c.jpg',
            marca:'Xiaomi',
            modelo:'redmi 10c',
            armazenamento: '128GB',
            processador:'Snapdragon 680 4G',
            ram: '4GB',
            qualidadeCamera:'50 Mp ',
            tipoTela: 'IPS LCD',
            preco: 998,
            cor: 'Preto',
            cargaBateria: '5000mAh',
            anoDeLancamento:'2022',
        }

//------------------------------------------------------------------




console.log(`${celular1.marca} ${celular1.modelo} --> R$ ${celular1.preco}`)
console.log(`${celular2.marca} ${celular2.modelo} --> R$ ${celular2.preco}`)
console.log(`${celular3.marca} ${celular3.modelo} --> R$ ${celular3.preco}`)
console.log(`${celular4.marca} ${celular4.modelo} --> R$ ${celular4.preco}`)
console.log(`${celular5.marca} ${celular5.modelo} --> R$ ${celular5.preco}`)
console.log(`${celular6.marca} ${celular6.modelo} --> R$ ${celular6.preco}`)
console.log(`${celular7.marca} ${celular7.modelo} --> R$ ${celular7.preco}`)
console.log(`${celular8.marca} ${celular8.modelo} --> R$ ${celular8.preco}`)
console.log(`${celular9.marca} ${celular9.modelo} --> R$ ${celular9.preco}`)
console.log(`${celular10.marca} ${celular10.modelo} --> R$ ${celular10.preco}`)


//-----------------------------------------------------------------

let listDeCelulares = [];

listDeCelulares.push(celular1) 
listDeCelulares.push(celular2)
listDeCelulares.push(celular3)
listDeCelulares.push(celular4)
listDeCelulares.push(celular5)
listDeCelulares.push(celular6)
listDeCelulares.push(celular7)
listDeCelulares.push(celular8)
listDeCelulares.push(celular9)
listDeCelulares.push(celular10)



for(let i = 0; i< listDeCelulares.length;i++){

    console.log(`${listDeCelulares[i].marca} ${listDeCelulares[i].modelo} --> R$ ${listDeCelulares[i].preco}`)
}
 
for( let i = 0; i< listDeCelulares.length;i++) {

document.write(`
    <div class= "card">
<img class="foto" src="img/${listDeCelulares[i].foto}">
        <p class="nome"> ${listDeCelulares[i].modelo} ${listDeCelulares[i].marca} </p>
        <p class="armazenamento"> ${listDeCelulares[i].armazenamento} </p>
        <p class="cor"> ${listDeCelulares[i].cor} </p>
        <p class="ram"> ${listDeCelulares[i].ram} </p> 
        <p class="preco"> R$ ${listDeCelulares[i].preco}</p>

    </div>
`
);
}