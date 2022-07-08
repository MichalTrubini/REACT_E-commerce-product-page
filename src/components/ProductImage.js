import sneakers from '../images/image-product-1.jpg';
import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';

import '../css/productimage.css'

const ProductImage = () => {
    return (
        <>
            <div className="image">
                <img src={sneakers} alt="sneakers"/>
                <div className='image__icons-container padding-sm'>
                    <button className='image__button'><img src={previous} alt="previous" className='image__icons image__icons-left'/></button>
                    <button className='image__button'><img src={next} alt="next" className='image__icons image__icons-right'/></button>
                </div>
            </div>
        </>
    )
}

export default ProductImage;