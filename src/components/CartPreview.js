import React, { useContext } from 'react';

import '../css/cartPreview.css';
import productImage from '../images/image-product-1-thumbnail.jpg';
import trashBin from '../images/icon-delete.svg';

import CartContext from '../store/cart-context';

const CartPreview = React.forwardRef((props, ref) => {

    const {item} = useContext(CartContext);
    const {addToCart} = useContext(CartContext);

    const removeContentHandler = () => {
        addToCart(0);
    }

    return (
        <div className="cart-preview" ref={ref} {...props}>
            <h3 className='cart-preview__heading'>Cart</h3>
            {item[0].inputQty > 0 &&
            <>
                <div className='cart-preview__product'>
                    <img src={productImage} alt="product" className='cart-preview__image'/>
                    <div>
                        <p>Fall Limited Edition Sneakers</p>
                        <p><span>$125.00</span> x <span>{item[0].inputQty + ' '}</span><span className='cart-preview__total-price'>$375.00</span></p>
                    </div>
                    <img src={trashBin} alt="delete" onClick={removeContentHandler}/>
                </div>
                <div className='cart-preview__button-container'>
                    <button className='cart-preview__button'>Checkout</button>
                </div>
            </>
            }
            {(item[0].inputQty === 0) &&
             <div>
                <p className='cart-preview__empty'>Your cart is empty.</p>
             </div>
            }
        </div>
    )
})

export default CartPreview;