import ProductCart from "./ProductCart";
import ProductDetail from "./ProductDetail";
import ProductImage from "./ProductImage";

const SingleProduct = () => {

    const productDetails = {
        id: '1',
        brand: 'Sneaker company',
        title: 'Fall Limited Edition Sneakers',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.00,
        discount: 0.5
        }

    return (
        <>
            <ProductImage />
            <ProductDetail 
                brand={productDetails.brand} 
                title={productDetails.title}
                description={productDetails.description}
                discount={productDetails.discount * 100 + '%'}
                priceDiscount={'$' + productDetails.discount * productDetails.price}
                price={'$' + productDetails.price}
            />
            <ProductCart/>
        </>
    )
}

export default SingleProduct;