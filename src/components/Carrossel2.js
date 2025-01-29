import './Carrossel1.css';
import ragnarok from '../img/ragnarok.jpeg'
import dark from '../img/dark.jpg'
import lacasa from '../img/lacasa.jpg'
import elite from '../img/elite.webp'
import sex from '../img/education.jpeg'

function Carrossel2() {
  const series = [
    { src: ragnarok },
    { src: dark },
    { src: lacasa },
    { src: elite },
    { src: sex },
  ];

  return (
    <div className="carrossel1">
      <a className="lista">Séries estrangeiras</a>
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

export default Carrossel2;