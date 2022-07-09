 import logo from '../images/logo.svg';
 import hamburger from '../images/icon-menu.svg';
 import cart from '../images/icon-cart.svg';
 import profileImage from '../images/image-avatar.png';
 import close from '../images/icon-close.svg';

 import '../css/nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav__left'>
                <img className="nav__hamburger" src={hamburger} alt="menu" />
                <img src={logo} alt="sneakers" />
                <div className='nav__list-wrapper'>
                    <img className="nav__menu-close" src={close} alt="close menu" />
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
                <img src={cart} alt="cart" />
                <img src={profileImage} alt="profile" className='nav__profile'/>
            </div>
        </nav>
    )
}

export default Nav;