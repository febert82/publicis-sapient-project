import React from 'react';

const GalleryModal = ({ showModal3 }) => {

    const src = "https://source.unsplash.com/random/860x483";

    return (
        <>
        <div className="modalContainer">
            <div className="modalHeader">
                <div className="modalTitle">
                    <h1 className="whiteText">GALLERY 01</h1>
                    <h4 className="modalContainerText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit etiam id blandit elementum lectus mauris ut cursus adipiscing.
                        Egestas nam mattis adipiscing velit fermentum et.
                    </h4>
                </div>
                <button onClick={showModal3} type="button" class="btn btn-outline-secondary closeButton">X</button>
            </div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={src} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src={src} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={src} class="d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
        </>
    )
}

export default GalleryModal;