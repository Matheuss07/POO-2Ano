let musica1 = {
    poster:'PelaEspada.jpg',
    titulo:'Pela Espada',
    artistas:'Henrique Mendoça',
    album: 'Single',

}
    
let musica2 = {
    poster:'Maquina.jpg',
    titulo:'Maquina do Tempo',
    artistas:'Matuê',
    album: 'Maquina do Tempo',

}
    
let musica3 = {
    poster:'Skyfall.jpg',
    titulo:'Skyfall',
    artistas:'Adele',
    album: 'Single',

}
    
let musica4 = {
    poster:'ArdeOutraVez.webp',
    titulo:'Arde outra vez',
    artistas:'Thalles Roberto',
    album: 'Na sala do Pai',

}
    
let musica5 = {
    poster:'MeLevaPraCasa.jpeg',
    titulo:'Me Leva Para Casa',
    artistas:'Israel Subira',
    album: 'Single',

}
    
let musica6 = {
    poster:'Jesus.jpeg',
    titulo:'Quero Conhecer Jesus',
    artistas:'Alessandro Vilas Boas',
    album: 'O Fogo Nunca Dorme',

}
    
let musica7 = {
    poster:'heaven.jpeg',
    titulo:'Heaven',
    artistas:'Bryan Adams',
    album: 'Silgle',

}
    
let musica8 = {
    poster:'Flow.jpeg',
    titulo:'Flow Espacial',
    artistas:'Teto, WIU, Matuê',
    album: 'Single',

}
    
let musica9 = {
    poster:'alagar.jpeg',
    titulo:'Deixa Alagar',
    artistas:'Grupo Revelação',
    album: 'O samba continua',

}
    
let musica10 = {
    poster:'Suamae.jpeg',
    titulo:'Sua Mãe Vai Me Amar',
    artistas:'Turma do Pagode',
    album: 'Single',

}
    

let playlist = [];

playlist.push(musica1) 
playlist.push(musica2)
playlist.push(musica3)
playlist.push(musica4)
playlist.push(musica5)
playlist.push(musica6)
playlist.push(musica7)
playlist.push(musica8)
playlist.push(musica9)
playlist.push(musica10)


for( let i = 0; i< playlist.length;i++) {

    document.write(`
        <div class= "card">
            <img class="poster" src="img/${playlist[i].poster}">
            <div  class="info">
                <span class="titulo"> ${playlist[i].titulo} </span>
                <span class="artista"> ${playlist[i].artistas} </span>
            </div>   
            <span class="album"> ${playlist[i].album} </span>
        </div>
    `
    );
    }