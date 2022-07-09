import sneakers1 from '../images/image-product-1.jpg';
import sneakers2 from '../images/image-product-2.jpg';
import sneakers3 from '../images/image-product-3.jpg';
import sneakers4 from '../images/image-product-4.jpg';

import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';

import '../css/productimage.css'

const ProductImage = () => {
    return (
        <>
            <div className="product__image-wrapper">
                <img className="product__image" src={sneakers1} alt="sneakers"/>
                <div className='product__icons-container'>
                    <button className='product__button'><img src={previous} alt="previous" className='product__icons product__icons-left'/></button>
                    <button className='product__button'><img src={next} alt="next" className='product__icons product__icons-right'/></button>
                </div>
                <div className='product__thumbnail-wrapper'>
                    <img className="product__thumbnail" src={sneakers1} alt="sneakers"/>
                    <img className="product__thumbnail" src={sneakers2} alt="sneakers"/>
                    <img className="product__thumbnail" src={sneakers3} alt="sneakers"/>
                    <img className="product__thumbnail" src={sneakers4} alt="sneakers"/>
                </div>
            </div>
        </>
    )
}

export default ProductImage;