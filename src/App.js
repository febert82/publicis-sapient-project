import React from 'react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import GalleryModal2 from './components/Body/Gallery/GalleryModal2';
import NavBar2 from './components/Header/NavBar/NavBar2';

const App = () => {
    return (
        <>
            <Header className="header"></Header>
            <Body></Body>
            <Footer></Footer>
        </>
    )
}

export default App;