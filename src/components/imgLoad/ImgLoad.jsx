import React, {useState, useEffect} from 'react';
import {Blurhash} from 'react-blurhash';
import { useLayoutEffect, useRef } from 'react';

export default function ImgLoad ({ src, id, className, value }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [placeholderWidth, setPlaceholderWidth] = useState(0);
    const [placeholderHeight, setPlaceholderHeight] = useState(0);
    const placeholderRef = useRef(null);

    useLayoutEffect(() => {
        if (placeholderRef.current) {
            const { width, height } = placeholderRef.current.getBoundingClientRect();
            setPlaceholderWidth(width);
            setPlaceholderHeight(height);
        }
    }, []);

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setIsLoaded(true)
        }
    }, [src])

    return (
        <>

        {!isLoaded && (
            <div ref={placeholderRef}>
                {/* Placeholder content */}
                <Blurhash
                    hash={id}
                    className={className}
                    width={placeholderWidth}
                    height={placeholderWidth / value}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
        )}
        {isLoaded && ( 
            <img
            onLoad={() => setIsLoaded(true)}
            src={src}
            id={placeholderWidth / value}
            className={className}
            alt="img" />
        )}
            
        </>
    );
};