import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="logo_image">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/order">Order Review</a></li>
                    <li><a href="/inventory">Manage Inventory Here</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;