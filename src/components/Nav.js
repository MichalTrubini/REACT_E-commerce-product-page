 import React, { useState, useContext } from 'react';
 
 import logo from '../images/logo.svg';
 import hamburger from '../images/icon-menu.svg';
 import cart from '../images/icon-cart.svg';
 import profileImage from '../images/image-avatar.png';
 import close from '../images/icon-close.svg';

 import '../css/nav.css';
 import CartContext from '../store/cart-context';

const Nav = () => {

    const [menu, setMenu] = useState(false);

    const showSideMenuHandler = () => {
        setMenu(true);
    }

    const hideSideMenuHandler = () => {
        setMenu(false);
    }

    const {item} = useContext(CartContext);
    console.log(item);

    return (
        <nav className='nav'>
            <div className='nav__left'>
                <img className="nav__hamburger" src={hamburger} alt="menu" onClick={showSideMenuHandler}/>
                <img src={logo} alt="sneakers" />
                <div className={ menu === true ? 'nav__list-wrapper nav__list-visible' : 'nav__list-wrapper'}>
                    <img className="nav__menu-close" src={close} alt="close menu" onClick={hideSideMenuHandler}/>
                    <ul className='nav__list'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='nav__right'>
                <div className='nav__cart-wrapper'>
                    <img src={cart} alt="cart" />
                    <div className='nav__cart-bubble'>0</div>
                </div>
                <img src={profileImage} alt="profile" className='nav__profile'/>
            </div>
        </nav>
    )
}

export default Nav;