import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import GalleryModal from './GalleryModal';
import GalleryRow from './GalleryRow';

var ItemNumber = 10;

var arr = [1,3,5,7,9];

var show = true;

const Gallery = () => {

    const [showModal, setShowModal] = useState(false);

    const handleModal = (e) => {
        e.preventDefault();
        setShowModal(!showModal);
    }

    return (
        <>
        <div class="container-fluid">
            { arr.map((n) => (
                <GalleryRow n={n}></GalleryRow>
            )) }
        </div>
        </>  
    )
}

export default Gallery;