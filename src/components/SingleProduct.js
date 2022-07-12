import React, { useEffect, useContext } from "react";

import ProductCart from "./ProductCart";
import ProductDetail from "./ProductDetail";
import ProductImage from "./ProductImage";

//import ProductContext from "../store/product-context";
//import CartContext from '../store/cart-context';
import { ProductProvider } from "../store/product-context";

const SingleProduct = () => {

    //const {addToCart} = useContext(ProductContext);
    

    //useEffect(() => {
    //    test(productDetails.title, productDetails.price);
    //}
    //);

    const productDetails = {
        id: '1',
        brand: 'Sneaker company',
        title: 'Fall Limited Edition Sneakers',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.00,
        discount: 0.5
        }

    return (
        <div className="product__wrapper">
            <ProductProvider>
                <ProductImage />
                <div className="product__details-wrapper">
                    <ProductDetail 
                        brand={productDetails.brand} 
                        title={productDetails.title}
                        description={productDetails.description}
                        discount={productDetails.discount * 100 + '%'}
                        priceDiscount={'$' + productDetails.discount * productDetails.price}
                        price={'$' + productDetails.price}
                    />
                    <ProductCart/>
                </div>
            </ProductProvider>
        </div>
    )
}

export default SingleProduct;