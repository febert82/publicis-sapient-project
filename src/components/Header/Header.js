import React from 'react';

import NavBar2 from './NavBar/NavBar2';


const Header = () => {
    return (
        <div className="header">
           <NavBar2></NavBar2>
           <div className="title-div">
                <h1 className="title">ARCHIVIO STORICO</h1>
                <h3 className="subtitle">Una raccolta di tutti i momenti più importanti nella storia del museo e dei suoi curatori.</h3>
           </div>
        </div>    
    )
}

export default Header;