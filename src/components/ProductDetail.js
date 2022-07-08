import '../css/productdetail.css'

const ProductDetail = (props) => {
    return (
        <div className="product padding-sm">
            <div >
                <p className="product__brand">{props.brand}</p>
                <h2 className="product__title">{props.title}</h2>
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