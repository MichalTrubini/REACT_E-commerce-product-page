 import logo from '../images/logo.svg';
 import hamburger from '../images/icon-menu.svg';
 import cart from '../icon-cart.svg';
 import profileImage from '../images/icon-avatar.png'
 
const Nav = () => {
    return (
        <nav className='nav'>
            <div>
                <img src={hamburger} alt="menu" />
                <img src={logo} alt="sneakers" />
            </div>
            <div>
                <img src={cart} alt="cart" />
                <img src={profileImage} alt="profile image" />
            </div>
        </nav>
    )
}

export default Nav;