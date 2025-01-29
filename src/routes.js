import {Routes, Route} from 'react-router-dom'
import Profiles from './pages/profiles'
import Home from './pages/Home'

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Profiles/>} />
            <Route path='/home' element={<Home />} />

        </Routes>
    );
}

export default MainRoutes;