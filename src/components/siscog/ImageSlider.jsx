import React, { useState } from 'react';
import { useEffect } from 'react';
import "./imageSlider.css";

const ImageSlider = ({ images }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className='siscogImgContainer'>
            <img src={images[currentImageIndex]} alt=""/>
            <div className='dotContainer'>
                {images.map((images, index) => (
                    <div className={`dotStyles ${index === currentImageIndex ? 'active' : ''}`} key={index} onClick={() => goToSlide(index)}>•</div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;