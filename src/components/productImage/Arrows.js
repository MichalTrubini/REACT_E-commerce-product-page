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

    const classes = props.className;

    return (
        <>
            <button className={classes[0]} onClick={previousImageHandler}><img src={previous} alt="previous" className={classes[1]} /></button>
            <button className={classes[0]} onClick={nextImageHandler}><img src={next} alt="next" className={classes[2]} /></button>
        </>
    )
}

export default Arrows;