import React, { useState, useEffect } from 'react';
import "./imageSlider.css";

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return; // Early exit if no images

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [images]); // Include images in the dependency array

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className='siscogImgContainer'>
            <img src={images[currentImageIndex]} alt="Slider" />
            <div className='dotContainer'>
                {images.map((_, index) => (
                    <div
                        className={`dotStyles ${index === currentImageIndex ? 'active' : ''}`}
                        key={index}
                        onClick={() => goToSlide(index)}
                    >
                        •
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
