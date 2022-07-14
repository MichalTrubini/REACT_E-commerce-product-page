import React, { useState, useEffect, useRef } from 'react';

import '../../css/productimage.css';

import ProductThumbnails from './ProductThumbnails';
import ProductImagePartial from './ProductImagePartial';
import Arrows from './Arrows';
import Lightbox from '../Lightbox';

const ProductImage = () => {

    const [shiftValue, setShiftValue] = useState('0');
    const [lightbox, setLightbox] = useState(false);
    const lightboxRef = useRef();

    const screenWidth = window.innerWidth;

    const lightboxHandler = () => {
        setLightbox(true);
    }

    useEffect(() => {

        let handler = (event) => {
            if (!lightboxRef.current?.contains(event.target)){
                setLightbox(false);
            }
        }
        
        document.body.addEventListener('mousedown', handler);

        return () => document.body.removeEventListener('mousedown', handler)

    });

    const styles = ['product__button','product__icons product__icons-left','product__icons product__icons-right']

    return (
        <>
            {(screenWidth > 1439 & lightbox) ? <Lightbox ref={lightboxRef} onCloseLightbox={setLightbox}/> : undefined}
            <div className="product__image-wrapper">
                <div className='product__image-container'>
                    <ProductImagePartial className="product__image" shiftValue={shiftValue} onClick={lightboxHandler} onLightboxClose={setLightbox}/>
                </div>
                <div className='product__icons-container'>
                    <Arrows className={styles} shiftValue={shiftValue} onArrowClick={setShiftValue}/>
                </div>
                <ProductThumbnails className='product__thumbnail-wrapper' shiftValue={shiftValue} onThumbnailClick={setShiftValue}/>
            </div>
        </>
    )
}

export default ProductImage;