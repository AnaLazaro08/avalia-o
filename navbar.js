import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
       <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#services">Meus Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
