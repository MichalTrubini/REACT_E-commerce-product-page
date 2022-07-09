import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart.svg'

import '../css/productcart.css'

const ProductCart = () => {
    return (
        <div className='product-cart margin-fix'>
         <form className='product-cart__form'>
            <div className='product-cart__container'>
                <input className="product-cart__input" step={1} min={0} placeholder={0}/>
                <div className='product-cart__icons'>
                    <img src={minus} alt="minus" />
                    <img src={plus} alt="plus" />
                </div>
            </div>
            <button className="product-cart__button">
                <img src={cart} alt="cart"/>
                <p>Add to cart</p>
            </button>
         </form>
        </div>
    )
}

export default ProductCart;