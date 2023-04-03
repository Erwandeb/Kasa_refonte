import React, { useState } from 'react';
import flecheLeft from '../../../public/media/fleche-left.png';
import flecheRight from '../../../public/media/fleche-right.png';

const Slider = ({ logementData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const onNextSlide = () => {
        if (currentImageIndex === logementData.pictures.length) {
            setCurrentImageIndex(1);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    const onPrevSlide = () => {
        if (currentImageIndex === 1) {
            setCurrentImageIndex(logementData.pictures.length);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    const length = logementData.pictures.length;

    // Affichage des photos
    let showImages;
    if (logementData) {
        showImages = logementData.pictures.map((photo) => {
            return <img src={photo} alt={photo} key={photo} className="imageSlider"/>
        });
    } else {
        showImages = "loading";
    }
    
    // Affichages des flèches
    let arrowRight = <img src={flecheRight} alt="fleche next" className="arrow-right" onClick={() => onNextSlide()} />;
    if (logementData.pictures.length === 1) {
        arrowRight = "";
    }

    let arrowLeft = <img src={flecheLeft} alt="fleche previous" className="arrow-left" onClick={() => onPrevSlide()} />;
    if (logementData.pictures.length === 1) {
        arrowLeft = "";
    }

    return (
        <div className="slider">
            <div className="slider-window">
                {arrowRight}
                {arrowLeft}
                <p className="length-indicatif">{currentImageIndex}/{length}</p>
                <div className="slider-derouler" id="slider-derouler-id" style={{transform: `translateX(${-(currentImageIndex - 1) * 100}%)`}}>
                    {showImages}
                </div>
            </div>
        </div>
    );
}

export default Slider;
