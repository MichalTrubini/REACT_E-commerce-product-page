import React from 'react';

import next from '../../images/icon-next.svg';
import previous from '../../images/icon-previous.svg';

import '../../css/productimage.css';

const Arrows = (props) => {

    const nextImageHandler = () => {
        if (props.shiftValue > -300) props.onArrowClick(currVal => currVal - 100);
    }

    const previousImageHandler = () => {
        if (props.shiftValue < 0) props.onArrowClick(currVal => currVal + 100);
    }


    return (
        <>
            <div className='product__icons-container'>
                <button className='product__button' onClick={previousImageHandler}><img src={previous} alt="previous" className='product__icons product__icons-left' /></button>
                <button className='product__button' onClick={nextImageHandler}><img src={next} alt="next" className='product__icons product__icons-right' /></button>
            </div>
        </>
    )
}

export default Arrows;