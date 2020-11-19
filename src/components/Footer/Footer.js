import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../img/Eiga.svg';
import '../../scss/style.scss';


function Footer() {



  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="logo"/>
      <div class="footer__author">
        <p>REACT PROJECT <br></br><span>designed and developed by</span></p>
        <a href="#" class="author">Wendy <span>Paulos</span></a>
        <a href="#" class="author">Jacky <span>Truong</span></a>
        <a href="#" class="author">Renaud <span>Fradin</span></a>
        <a href="#" class="author">Emmy <span>Peteytas</span></a>
        <a href="#" class="author">Annie <span>Tran</span></a>
        <a href="#" class="author">Priska <span>Sumampow</span></a>
        <a href="#" class="author">Dorian <span>Vidal</span></a>
        <a href="#" class="author">Anthony <span>Roux</span></a>
        <a href="#" class="author">Oum <span>Mauduit</span></a>
        <a href="#" class="author">Yoan <span>Bensimhon</span></a>
        <a href="#" class="author">Tong <span>Xing</span></a>
      </div>
      <div class="footer__legalMentions">
        <p>Copyright ©2020</p>
        <p>Données venant de l’API IMDB</p>
      </div>
    </footer>


  );
}

export default Footer;