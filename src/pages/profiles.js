import './profiles.css';
import SelecaoPerfil from '../components/SelecaoPerfil';
import perfil from '../img/images.jpeg'
import messi from '../img/messi.jpeg'
import cris from '../img/cr7.jpg'
import ney from '../img/ney.jpeg'
import add from '../img/add2.1.png'


function Profile(){
    const usuario1 = {nome: 'Matheus',
                  foto: perfil
};

const usuario2 = {nome: 'messi',
                  foto: messi
};

const usuario3 = {nome: 'Cris',
                  foto: cris
};

const usuario4 = {nome: 'Ney',
                  foto: ney
};

const usuario5 = {nome:'Adicionar Perfil',
                  foto: add
}

const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5]

return(
    <SelecaoPerfil listaDeUsuarios={usuarios}/>
)

}

export default Profile;