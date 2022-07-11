import React, { useState } from 'react';

import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart.svg'

import '../css/productcart.css'

const ProductCart = () => {

    const [inputQty, setQty] = useState(0);

    const qtyAddHandler = () => {
        setQty(inputQty + 1)
    }

    const qtyRemoveHandler = () => {
        if (inputQty>=1) setQty(inputQty - 1);
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const cartQty = inputQty;
        console.log(cartQty);
    }

    return (
        <div className='product-cart margin-fix'>
         <form className='product-cart__form'>
            <div className='product-cart__container'>
                <input type="number" className="product-cart__input" step={1} min={0} value={inputQty} readOnly/>
                <div className='product-cart__icons'>
                    <img src={minus} alt="minus" onClick={qtyRemoveHandler}/>
                    <img src={plus} alt="plus" onClick={qtyAddHandler}/>
                </div>
            </div>
            <button type="submit" className="product-cart__button" onClick={submitHandler}>
                <img src={cart} alt="cart"/>
                <p>Add to cart</p>
            </button>
         </form>
        </div>
    )
}

export default ProductCart;