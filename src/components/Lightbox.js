import React, { useState } from "react";

import ProductThumbnails from "./productImage/ProductThumbnails";
import ProductImagePartial from "./productImage/ProductImagePartial";
import Arrows from "./productImage/Arrows";

import '../css/productimage.css';
import close from '../images/icon-close.svg';

const Lightbox = (props) => {
    const [shiftValue, setShiftValue] = useState('0');

    return (
        <div className="product__lightbox">
            <div className="product__image-wrapper">
                <img src={close} alt="close" className="product__lightbox-close"/>
                <div className='product__image-container'>
                    <ProductImagePartial shiftValue={shiftValue}/>
                </div>
                <Arrows onArrowClick={(shiftValue)=>{setShiftValue(shiftValue)}}/>
                <ProductThumbnails onThumbnailClick={(shiftValue)=>{setShiftValue(shiftValue)}}/>
            </div>
        </div>
    )
}

export default Lightbox;