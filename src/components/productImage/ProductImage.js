import React, { useState } from 'react';

import '../../css/productimage.css';

import ProductThumbnails from './ProductThumbnails';
import ProductImagePartial from './ProductImagePartial';
import Arrows from './Arrows';
import Lightbox from '../Lightbox';

const ProductImage = () => {

    const [shiftValue, setShiftValue] = useState('0');
    const [lightbox, setLightbox] = useState(false);

    const screenWidth = window.innerWidth;

    const lightboxHandler = () => {
        setLightbox(true);
    }

    return (
        <>
            {(screenWidth > 1439 & lightbox) ? <Lightbox /> : undefined}
            <div className="product__image-wrapper">
                <div className='product__image-container'>
                    <ProductImagePartial shiftValue={shiftValue} onClick={lightboxHandler}/>
                </div>
                <Arrows shiftValue={shiftValue} onArrowClick={setShiftValue}/>
                <ProductThumbnails shiftValue={shiftValue} onThumbnailClick={setShiftValue}/>
            </div>
        </>
    )
}

export default ProductImage;