import './App.css';
import Header from './components/Header'; //onde temos a logo

import Main from './components/Main';

import { BrowserRouter as Router, Navigate, Routes, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home';
import Contato from './components/Pages/Contato';
import Navbar from './components/Navbar/Navbar';
import SobreNos from './components/Pages/SobreNos';
import VenderMeuCarro from './components/Pages/VenderMeuCarro';
import TabelaFipe from './components/Pages/TabelaFipe';
import OficinasAutorizadas from './components/Pages/OficinasAutorizadas';
import Aplicativo from './components/Pages/Aplicativo';


export default function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/vendermeucarro' element={<VenderMeuCarro />} />
          <Route exact path='/tabelafipe' element={<TabelaFipe />} />
          <Route exact path='/oficinasautorizadas' element={<OficinasAutorizadas />} />
          <Route exact path='/aplicativo' element={<Aplicativo />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/sobrenos' element={<SobreNos />} />
        </Routes>
      </Router>

    </>
  );
}

