import './Home.css'
import NavBar from '../components/NavBar'
import Carrossel1 from '../components/Carrossel1';
import Carrossel2 from '../components/Carrossel2';
import Carrossel3 from '../components/Carrossel3';
import Titulo from '../components/titulo';
import Carrossel4 from '../components/Carrossel4';

function Home(){
    return(
        <div className='back'>
            <div className='fixed'>
            <NavBar />
            </div>
            <div className='distance'>
                <Titulo className='tt' />
                <div className='distanceCarrosel'>
                    <Carrossel1 />
                    <Carrossel2 />
                    <Carrossel3 />
                    <Carrossel4 />
                </div>
            </div>
        </div>
    );
}

export default Home;