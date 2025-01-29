import './Carrossel1.css';
import fiquecomigo from '../img/fiquecomigo.jpeg'
import games from '../img/games.jpeg'
import suits from '../img/suits.jpeg'
import the from '../img/thewitcher.jpeg'
import palhaco from '../img/palhaco.jpg'



function Carrossel3() {
  const series = [
    { src: fiquecomigo },
    { src: games },
    { src: suits },
    { src: the },
    { src: palhaco },
  ];

  return (
    <div className="carrossel1">
      <a className="lista">Minha lista</a>
      <div className="carrossel">
        {series.map((serie) => (
          <div className="conteudo">
            <img className="foto-cont" src={serie.src} alt="Série" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrossel3;