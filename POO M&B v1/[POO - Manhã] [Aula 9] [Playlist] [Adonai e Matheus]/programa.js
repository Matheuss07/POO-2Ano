let musica1 = {
    poster:'PelaEspada.jpg',
    titulo:'Pela Espada',
    artistas:'Henrique Mendoça',
    album: 'Single',
    video: `HQj2tS_sNmg`
}
    
let musica2 = {
    poster:'mlks.jpeg',
    titulo:'Os muleke é liso (só de drible)',
    artistas:'Futparódias',
    album: 'Single',
    video: `qO-YywupEiM`
}
    
let musica3 = {
    poster:'ap.webp',
    titulo:'Rap do Apocalipse',
    artistas:'Henrique Mendonça',
    album: 'Single',
    video: `XMPah-jK-YM`,

}
    
let musica4 = {
    poster:'ArdeOutraVez.webp',
    titulo:'Arde outra vez',
    artistas:'Thalles Roberto',
    album: 'Na sala do Pai',
    video: `o6bSuclgy5w`

}
    
let musica5 = {
    poster:'MeLevaPraCasa.jpeg',
    titulo:'Me Leva Para Casa',
    artistas:'Israel Subira',
    album: 'Single',
    video: `80SJ8XHqKqM`

}
    
let musica6 = {
    poster:'Jesus.jpeg',
    titulo:'Quero Conhecer Jesus',
    artistas:'Alessandro Vilas Boas',
    album: 'O Fogo Nunca Dorme',
    video: `rBVjbjGVVjo`

}
    
let musica7 = {
    poster:'periclao.jpeg',
    titulo:'Até de durou',
    artistas:'Pericles',
    album: 'Silgle',
    video: `T3Y6RRSDm4o`

}
    
let musica8 = {
    poster:'racao.jpeg',
    titulo:'A vida é um desafio',
    artistas:'Racionais',
    album: 'Nada como um dia apos o outro',
    video: `Wb3rvC6z5ao`

}
    
let musica9 = {
    poster:'alagar.jpeg',
    titulo:'Deixa Alagar',
    artistas:'Grupo Revelação',
    album: 'O samba continua',
    video: `bOhasdCq1OU`

}
    
let musica10 = {
    poster:'racao.jpeg',
    titulo:'Vida loka pt.1',
    artistas:'Racionais',
    album: 'Nada como um dia apos o outro',
    video: 'IL1epaZCTmk'

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
            <iframe class="video"  src="https://www.youtube.com/embed/${playlist[i].video}" title="Matuê - Máquina do Tempo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    `
    );
    }