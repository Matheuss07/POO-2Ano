import './Carrossel4.css'

import breaking from '../img/breaking.png';
import outer from '../img/outer.png';
import peaky from '../img/peaky.png';
import senna from '../img/senna.png';
import dark from '../img/dark.jpg'
import fique from '../img/fiquecomigo.jpeg'
import sex from '../img/education.jpeg'
import thor from '../img/ragnarok.jpeg'
import lacasa from '../img/lacasa.jpg'
import stranger from '../img/satranger.jpg'


function Carrossel4(){
    return(
        <div className='container4'>
        
        <span className='c-top10-'>
            Brasil: top 10 em séries hoje
        </span>

        <div className='Carrossel-Numerado'>
            
            <div className='cards4'>
            <span className='numero'>1</span>
            <img className='capas4' src={senna}/>
        </div>

        <div className='cards4'>
            <span className='numero'>2</span>
            <img className='capas4' src={dark}/>
        </div>

        <div className='cards4'>
            <span className='numero'>3</span>
            <img className='capas4' src={peaky}/>
        </div>

        <div className='cards4'>
            <span className='numero'>4</span>
            <img className='capas4' src={outer}/>
        </div>

        <div className='cards4'>
            <span className='numero'>5</span>
            <img className='capas4' src={breaking}/>
        </div>

        <div className='cards4'>
            <span className='numero'>6</span>
            <img className='capas4' src={fique}/>
        </div>

        <div className='cards4'>
            <span className='numero'>7</span>
            <img className='capas4' src={sex}/>
        </div>

        <div className='cards4'>
            <span className='numero'>8</span>
            <img className='capas4' src={thor}/>
        </div>

        <div className='cards4'>
            <span className='numero'>9</span>
            <img className='capas4' src={lacasa}/>
        </div>

        <div className='cards4'>
            <span className='numero'>10</span>
            <img className='capas4' src={stranger}/>
        </div>

        </div>

    </div>

    )
}

export default Carrossel4;