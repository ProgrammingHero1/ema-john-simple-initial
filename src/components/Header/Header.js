import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from "../Auth/use-auth";
import {
    Link
  } from "react-router-dom";

const Header = () => {
    const auth = useAuth();
    console.log(auth);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {auth && auth.user && <span style={{color:'white'}}>{auth.user.email}</span>}
                {
                    auth && !auth.user ? <button onClick={()=>auth.signinWithGoogle()}>Sign in</button> 
                    : <button onClick={() => auth.signout()}>Sign Out</button>
                }
                
                
            </nav>
        </div>
    );
};

export default Header;