import React, { useState, useContext } from 'react';

import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart.svg'

import '../css/productcart.css'

import CartContext from '../store/cart-context';

const ProductCart = () => {

    const [inputQty, setQty] = useState(0);

    const qtyAddHandler = () => {
        setQty(inputQty + 1)
    }

    const qtyRemoveHandler = () => {
        if (inputQty>=1) setQty(inputQty - 1);
    }

    const {addToCart} = useContext(CartContext);

    const submitHandler = (event) => {

        event.preventDefault();

        if (inputQty > 0) addToCart(inputQty);

        setQty(0);
    }

    return (
        <div className='product-cart margin-fix'>
         <form className='product-cart__form'>
            <div className='product-cart__container'>
                <label htmlFor="qty" hidden>Add qty</label>
                <input id="qty" type="number" className="product-cart__input" step={1} min={0} value={inputQty} readOnly/>
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