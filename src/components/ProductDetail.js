import '../css/productdetail.css'

const ProductDetail = (props) => {
    return (
        <div className="product__details-container margin-fix">
            <div >
                <p className="product__brand">{props.brand}</p>
                <h1 className="product__title">{props.title}</h1>
                <p className="product__description">{props.description}</p>
            </div>
            <div className='product__pricing'>
                <div className='product__pricing-discount'>
                    <p className="product__discount-price">{props.priceDiscount}</p>
                    <p className="product__discount">{props.discount}</p>
                </div>
                    <p className="product__price">{props.price}</p>
            </div>
        </div>
    )
}

export default ProductDetail;