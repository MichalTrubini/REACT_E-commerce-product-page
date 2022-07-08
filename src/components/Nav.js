 import logo from '../images/logo.svg';
 import hamburger from '../images/icon-menu.svg';
 import cart from '../images/icon-cart.svg';
 import profileImage from '../images/image-avatar.png';

 import '../css/nav.css'

const Nav = () => {
    return (
        <nav className='nav padding-sm'>
            <div className='nav__left'>
                <img src={hamburger} alt="menu" />
                <img src={logo} alt="sneakers" />
            </div>
            <div className='nav__right'>
                <img src={cart} alt="cart" />
                <img src={profileImage} alt="profile" className='nav__profile'/>
            </div>
        </nav>
    )
}

export default Nav;