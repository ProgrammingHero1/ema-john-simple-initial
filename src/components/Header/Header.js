import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const user = useContext(UserContext);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <span style={{color:'yellow'}}>{user}</span>
            </nav>
        </div>
    );
};

export default Header;