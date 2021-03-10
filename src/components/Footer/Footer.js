import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import fiatLogo from "../../images/fiat-footer.png";

//import NavBar from './NavBar/NavBar';


const Footer = () => {

    return (
        <div className="container-fluid footer">
            <div class="container-fluid footerContainer">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="row footerSubtitle">
                            THE MUSEUM
                        </div>
                        <div class="row footerSubtitle2">
                            <u>Via Sant Ottavio, 44 - 10126 Torino</u>
                        </div>
                        <br></br>
                        <br></br>
                        <div style={{"position":"relative", "left":"-5px"}}>
                            <img src={fiatLogo} alt="fiat" />
                            <div style={{"position":"relative", "left":"-15px"}}>
                                <p>&nbsp; &nbsp; MAIN PARTNER</p>
                            </div>    
                        </div>
                        <div class="row">
                            <span><a class="nav-link footerLink2" href="/"><FaFacebookF /></a></span>
                            <span><a class="nav-link" href="/"><FaTwitter /></a></span>
                            <span><a class="nav-link" href="/"><FaYoutube /></a></span>
                            <span><a class="nav-link" href="/"><FaPinterest /></a></span>
                            <span><a class="nav-link" href="/"><FaInstagram /></a></span>                           
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <ul className="footerMenu">
                            <li class="nav-link footerLink">
                                <a class="nav-link" href="/">STAMPA</a>
                            </li>
                            <li class="nav-link footerLink">
                                <a class="nav-link" href="/">STATUTO E CODICE ETICO</a>
                            </li>
                            <li class="nav-link footerLink">
                                <a class="nav-link" href="/">PRIVACY</a>
                            </li>
                        </ul> 
                        <p><FaPhoneAlt />&nbsp; &nbsp; 011.0062713</p>
                        <p><FaEnvelope />&nbsp; &nbsp; info@themuseum.it</p>
                    </div>
                    <div class="col-lg-4 ">
                        <h2>Resta sempre aggiornato su mostre, workshop ed eventi</h2>
                        <label for="email">email</label>
                        <br></br>
                        <input style={{"width":"80%"}} name="email"></input>
                        <br></br>
                        <br></br>
                        <label for="privacy">Accetto termini e condizioni &nbsp; &nbsp;</label>
                        <input type="radio" name="privacy"></input>
                        <br></br>
                        <br></br>
                        <div class="nav-link">
                            <a class="nav-link footerLink" href="/"><u>ISCRIVITI ALLA NEWSLETTER</u> ---></a>
                        </div> 
                    </div>
                </div>
           </div>
           <div className="redFooter">
               <p style={{"color": "black"}}>2020 THE MUSEUM ©</p>
           </div>
        </div>    
    )
}

export default Footer;