import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'

import App from '../App';

const Header = () => {
    return (
        <>
            <Navbar />
                {/* <Router>
                    <Navbar />
                
                <Routes>
                    <Route path="/" exact element>{<App />}</Route>
                    <Route path='/' element={<App/ >} />
                    <Route path='/vendermeucarro' exact component={VenderMeuCarro} />
                    <Route path='/oficinasautorizadas' exact component={OficinasAutorizadas} />
                    <Route path='/tabelafipe' exact component={TabelaFipe} />
                    <Route path='/aplicativo' exact component={Aplicativo} />
                    <Route exact path='/' element={<Inicio />} />
                    <Route exact path='/contato' element={<Contato />} />
                    
                    <Route path='*' element={<Navigate to='/' />} />

                </Routes>
            </Router>    */}

            {/* <div className='header'>

                
                <div className='header__logo'>
                    <img src={LogoWillz} alt='Willz Logo' />
                </div>

                
                <div className="header__center"> 
                    <Navbar />
                </div>

                <div className="header__right">
                    <p>Entrar</p>
                    <p>Ajuda</p>
                </div>
            </div>  */}
        </>
    );
}

export default Header