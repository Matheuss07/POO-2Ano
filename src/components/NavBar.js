import './NavBar.css'
import logo from '../img/netflix-logo-transparente.png'
import { CgProfile } from "react-icons/cg";


// As entradas de um componente devem estar entre chaves.
// Isso é uma exigência do React
function NavBar(){

    return (
    <div className='nav-bar'>
            <div className='nav-bar1'>
            <img className='logotipo' src={logo} />
            <a className='link selecionado'> Início </a>
            <a className='link'> Séries </a>
            <a className='link'> Filmes </a>
            <a className='link'> Bombando </a>
            <a className='link'> Minha lista </a>
            <a className='link'> Navegar por idiomas </a>
            </div>  

            <div className='nav-bar2'>
            <CgProfile  color='ffffff'/>
            <a className='link'> Conta</a>

            </div>

    </div>


    
    );
}

export default NavBar;