import React, { useState } from "react";

import ProductThumbnails from "./productImage/ProductThumbnails";
import ProductImagePartial from "./productImage/ProductImagePartial";
import Arrows from "./productImage/Arrows";

import '../css/productimage.css';
import close from '../images/icon-close.svg';

const Lightbox = React.forwardRef((props, ref) => {
    const [shiftValue, setShiftValue] = useState('0');

    const styles = ['product__lightbox-button','product__icons product__icons-left','product__icons product__icons-right']
    
    const closeLightboxHandler = () => {
        props.onCloseLightbox((lightbox)=>!lightbox);
    }

    return (
        <div className="product__lightbox" >
            <div className="product__image-wrapper" {...props} ref={ref}>
                <img src={close} alt="close" className="product__lightbox-close" onClick={closeLightboxHandler}/>
                <div className='product__lightbox-image-container'>
                    <ProductImagePartial className="product__lightbox-image" shiftValue={shiftValue}/>
                </div>
                <div className='product__lightbox-icons-container'>
                    <Arrows className={styles} shiftValue={shiftValue} onArrowClick={setShiftValue}/>
                </div>
                <ProductThumbnails className='product__lightbox-thumbnail-wrapper' shiftValue={shiftValue} onThumbnailClick={setShiftValue}/>
            </div>
        </div>
    )
})

export default Lightbox;