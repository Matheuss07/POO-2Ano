import './Carrossel1.css';
import breaking from '../img/breaking.png';
import outer from '../img/outer.png';
import peaky from '../img/peaky.png';
import prison from '../img/prison.png';
import senna from '../img/senna.png';

function Carrossel1() {
  const series = [
    { src: breaking },
    { src: outer },
    { src: peaky },
    { src: prison },
    { src: senna },
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

export default Carrossel1;