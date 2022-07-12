import React, { useState } from 'react';

import sneakers1 from '../images/image-product-1.jpg';
import sneakers2 from '../images/image-product-2.jpg';
import sneakers3 from '../images/image-product-3.jpg';
import sneakers4 from '../images/image-product-4.jpg';

import sneakersThumb1 from '../images/image-product-1-thumbnail.jpg';
import sneakersThumb2 from '../images/image-product-2-thumbnail.jpg';
import sneakersThumb3 from '../images/image-product-3-thumbnail.jpg';
import sneakersThumb4 from '../images/image-product-4-thumbnail.jpg';

import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';

import '../css/productimage.css'

const ProductImage = () => {

    const [shiftValue, setShiftValue] = useState('0');

    const nextImageHandler = () => {
        if (shiftValue > -300) setShiftValue(shiftValue - 100);
    }

    const previousImageHandler = () => {
        if (shiftValue < 0) setShiftValue(shiftValue + 100);
        console.log('shift value before click ' + shiftValue)
    }

    const imageSwitchHandler = (e) => {
        setShiftValue(e.target.id);
    }
    console.log(shiftValue);
    return (
        <>
            <div className="product__image-wrapper">
                <div className='product__image-container'>
                    <img className="product__image" style={{transform:`translateX(${shiftValue}%)`}} src={sneakers1} alt="sneakers"/>
                    <img className="product__image" style={{transform:`translateX(${shiftValue}%)`}} src={sneakers2} alt="sneakers"/>
                    <img className="product__image" style={{transform:`translateX(${shiftValue}%)`}} src={sneakers3} alt="sneakers"/>
                    <img className="product__image" style={{transform:`translateX(${shiftValue}%)`}} src={sneakers4} alt="sneakers"/>
                </div>
                <div className='product__icons-container'>
                    <button className='product__button' onClick={previousImageHandler}><img src={previous} alt="previous" className='product__icons product__icons-left' /></button>
                    <button className='product__button' onClick={nextImageHandler}><img src={next} alt="next" className='product__icons product__icons-right' /></button>
                </div>
                <div className='product__thumbnail-wrapper'>
                    <img className={shiftValue === '0' ? "product__thumbnail product__thumbnail-selected" : "product__thumbnail"} id={0} src={sneakersThumb1} alt="sneakers" onClick={imageSwitchHandler}/>
                    <img className={shiftValue === '-100' ? "product__thumbnail product__thumbnail-selected" : "product__thumbnail"} id={-100} src={sneakersThumb2} alt="sneakers" onClick={imageSwitchHandler}/>
                    <img className={shiftValue === '-200' ? "product__thumbnail product__thumbnail-selected" : "product__thumbnail"} id={-200} src={sneakersThumb3} alt="sneakers" onClick={imageSwitchHandler}/>
                    <img className={shiftValue === '-300' ? "product__thumbnail product__thumbnail-selected" : "product__thumbnail"} id={-300} src={sneakersThumb4} alt="sneakers" onClick={imageSwitchHandler}/>
                </div>
            </div>
        </>
    )
}

export default ProductImage;