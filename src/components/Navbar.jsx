
import React, { useState } from 'react';
import logo from '../images/logo.png';


function Navbar() {
    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
         else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'} id='navbar'>
            <a href="#main" className='logo'>
                <img src={logo} alt="" />
            </a>
            <input type="checkbox" name="menu-btn" id="menu-btn" className="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                    <li><a href="#main">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#presentation">UI Presentation</a></li>
                    <li><a href="#download">Download</a></li>
                    <li><a href="#contact">Contact</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;