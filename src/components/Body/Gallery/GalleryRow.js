import React, { useState } from 'react';

import GalleryModal2 from './GalleryModal2';
import GalleryItem from './GalleryItem';

let gallerySize = 10;
let galleryRandomNumbers = [];

for (let i = 0; i < gallerySize; i++) {
    galleryRandomNumbers.push(Math.random(0, 100));
}

const src = "https://source.unsplash.com/random/860x483";
const src2 = "https://source.unsplash.com/collection";
const size = "860x483";

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 

const GalleryRow = ({ n }) => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const clickHandler1 = (e) => {
        e.preventDefault();
        setShowModal1(true);
    }

    const clickHandler2 = (e) => {
        e.preventDefault();
        setShowModal2(true);
    }

    const clickHandler3 = (e) => {
        e.preventDefault();
        setShowModal1(false);
        setShowModal2(false);
    }

    return (
        <>
            <div className="row galleryRow">
                { showModal1 || showModal2 ? (
                    <div className="col-lg-12 col-sm-12">
                        <GalleryModal2 showModal3={clickHandler3}></GalleryModal2>
                    </div>
                ) : (
                    <>
                    <div className="col-lg-6 col-sm-12 galleryItem">
                        <a href="/"><img class="galleryImage" src={`${src2}/${n}/${size}`} alt="img" onClick={clickHandler1}></img></a>
                        <div className="galleryItemBottom">
                            <h4>Nome foto</h4>
                            <h4>{Date()}</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 galleryItem">
                        <a href="/"><img class="galleryImage" src={`${src2}/${n+1}/${size}`} alt="img" onClick={clickHandler2}></img></a>
                        <div className="galleryItemBottom">
                            <h4>Nome foto</h4>
                            <h4>{Date()}</h4>
                        </div>
                    </div>
                </>
                ) }
                
                
            </div>
        </>
        
    )
}

export default GalleryRow;