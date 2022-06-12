import React, { useState } from "react";
import "./Navbar.css";
import LogoWillz from '../../assets/Willz.webp'

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">

      <div className='header__logo'>
        <img src={LogoWillz} alt='Willz Logo' />
      </div>

      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Início
          </a>
        </li>
        <li className="nav__item">
          <a href="/vendermeucarro" className="nav__link">
            Vender Meu Carro
          </a>
        </li>
        <li className="nav__item">
          <a href="/tabelafipe" className="nav__link">
            Tabela Fipe
          </a>
        </li>
        <li className="nav__item">
          <a href="/oficinasautorizadas" className="nav__link">
            Oficinas Autorizadas
          </a>
        </li>
        <li className="nav__item">
          <a href="/aplicativo" className="nav__link">
            Aplicativo
          </a>
        </li>
        <li className="nav__item">
          <a href="/contato" className="nav__link">
            Contato
          </a>
        </li>
        <li className="nav__item">
          <a href="/sobrenos" className="nav__link">
            Sobre Nós
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;