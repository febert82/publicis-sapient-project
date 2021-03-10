import React, { useState } from 'react';

import GalleryModal from './GalleryModal';

let gallerySize = 10;
let galleryRandomNumbers = [];

for (let i = 0; i < gallerySize; i++) {
    galleryRandomNumbers.push(Math.random(0, 100));
}

const src = "https://source.unsplash.com/random/860x483";
const src2 = "https://source.unsplash.com/collection";
const size = "860x483";

const GalleryItem = ({ n, showModal }) => {

    const [show, setShow] = useState(true);

    const clickHandler = (e) => {
        e.preventDefault();
        setShow(!show);
        console.log(show);
    }

    return (
        <>
            <div className="galleryItem">
                <a href="/"><img class="galleryImage" src={`${src2}/${n}/${size}`} alt="img" onClick={showModal}></img></a>
                <div className="galleryItemBottom">
                    <h4>Nome foto</h4>
                    <h4>Time</h4>
                </div>
            </div>
        </>
        
    )
}

export default GalleryItem;