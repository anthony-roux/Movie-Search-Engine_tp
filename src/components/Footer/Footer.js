import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../img/Eiga.svg';
import '../../scss/style.scss';


function Footer() {



  return (
    <footer className="footer">
      <div class="footer__logoContainer">
        <img className="footer__logo" src={logo} alt="logo"/>
      </div>
      <div class="footer__author">
        <p>REACT PROJECT <br></br><span>designed and developed by</span></p>
        <div class="author__container">
          <a href="https://github.com/WPaulos" target="_blank" rel="noreferrer" class="author">Wendy <span>Paulos</span></a>
          <a href="https://github.com/jackytruonghetic" target="_blank" rel="noreferrer" class="author">Jacky <span>Truong</span></a>
          <a href="https://github.com/Renaudfradin" target="_blank" rel="noreferrer" class="author">Renaud <span>Fradin</span></a>
          <a href="https://github.com/Amy-Dev" target="_blank" rel="noreferrer" class="author">Emmy <span>Peteytas</span></a>
          <a href="https://github.com/annietth" target="_blank" rel="noreferrer" class="author">Annie <span>Tran</span></a>
          <a href="https://github.com/SP-Sumampow" target="_blank" rel="noreferrer" class="author">Priska <span>Sumampow</span></a>
          <a href="https://github.com/dorian-vidal" target="_blank" rel="noreferrer" class="author">Dorian <span>Vidal</span></a>
          <a href="https://github.com/anthony-roux" target="_blank" rel="noreferrer" class="author">Anthony <span>Roux</span></a>
          <a href="https://github.com/Mauduit-O" target="_blank" rel="noreferrer" class="author">Oum <span>Mauduit</span></a>
          <a href="https://github.com/yo-gif12" target="_blank" rel="noreferrer" class="author">Yoan <span>Bensimhon</span></a>
          <a href="https://github.com/tiphanieTong" target="_blank" rel="noreferrer" class="author">Tong <span>Xing</span></a>
        </div>
      </div>
      <div class="footer__legalMentions">
        <p>Copyright ©2020</p>
        <a href="https://developer.imdb.com/" target="_blank" rel="noreferrer">Données venant de l’API IMDB</a>
      </div>
    </footer>


  );
}

export default Footer;