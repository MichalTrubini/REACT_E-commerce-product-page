import '../../css/productimage.css';

const ProductThumbnails = (props) => {
    
    const productThumbnails = [
        {
            id: 1,
            image:require('../../images/image-product-1-thumbnail.jpg'),
            shiftValue: '0',
            cssID: 0
        },
        {
            id: 2,
            image:require('../../images/image-product-2-thumbnail.jpg'),
            shiftValue: '-100',
            cssID: -100
        },
        {
            id: 3,
            image:require('../../images/image-product-3-thumbnail.jpg'),
            shiftValue: '-200',
            cssID: -200
        },
        {
            id: 4,
            image:require('../../images/image-product-4-thumbnail.jpg'),
            shiftValue: '-300',
            cssID: -300
        },
    ]

    const imageSwitchHandler = (e) => {
        props.onThumbnailClick(e.target.id);
    }

    return (
        <>
            <div className='product__thumbnail-wrapper'>
                {productThumbnails.map(productThumbnail => 
                        <img
                            key={productThumbnail.id}
                            className={props.shiftValue === productThumbnail.shiftValue ? "product__thumbnail product__thumbnail-selected" : "product__thumbnail"} 
                            id={productThumbnail.cssID} 
                            src={productThumbnail.image} 
                            alt="sneakers" 
                            onClick={imageSwitchHandler}
                        />)}
            </div>
        </>
    )
}

export default ProductThumbnails;