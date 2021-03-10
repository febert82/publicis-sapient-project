import React from 'react';
import { Carousel } from 'react-bootstrap'; 

const GalleryModal2 = ({ showModal3 }) => {

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
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-80 carouselItem"
                    src="https://source.unsplash.com/1600x900/?sport"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-80 carouselItem"
                    src="https://source.unsplash.com/1600x900/?nature"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-80 carouselItem"
                    src="https://source.unsplash.com/1600x900/?water"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
        </>
    )
}

export default GalleryModal2;