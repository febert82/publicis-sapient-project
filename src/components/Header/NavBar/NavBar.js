import React from 'react';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import Logo from './Logo';
import Menu from './Menu';
import Social from './Social';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand logo" href="/"><h1>THE MUSEUM</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">VISITA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">COSA VEDERE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">CHI SIAMO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">ATTIVITA'</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">AGENDA</a>
            </li>
            <li className="nav-item redLink">
              <a className="nav-link" href="/">ENG</a>
            </li>
            <li className="nav-item redLink">
              <a className="nav-link" href="/"><FaFacebookF /></a>
            </li>
            <li className="nav-item redLink">
              <a className="nav-link" href="/"><FaInstagram /></a>
            </li>
            <li className="nav-item redLink">
              <a className="nav-link" href="/"><FaTwitter /></a>
            </li>
          </ul>
        </div>
      </nav>  
    )
}

export default NavBar;