import '../../css/productimage.css';

const ProductImagePartial = (props) => {

    const productImages = [
        {
            id: 1,
            image:require('../../images/image-product-1.jpg')
        },
        {
            id: 2,
            image:require('../../images/image-product-2.jpg')
        },
        {
            id: 3,
            image:require('../../images/image-product-3.jpg')
        },
        {
            id: 4,
            image:require('../../images/image-product-4.jpg')
        },
    ]

    return (
        <>
            {productImages.map(productImage => 
                <img 
                    key={productImage.id} 
                    className="product__image" 
                    style={{transform:`translateX(${props.shiftValue}%)`}} 
                    src={productImage.image} 
                    alt="sneakers"
                    onClick={props.onClick}
                />)}
        </>
    )
}

export default ProductImagePartial;