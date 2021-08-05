import './Header.css'
import React from "react";
import logo from '../../image/logo.png'
import {Link, Route, Switch} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header(props) {
    return (
        <header className='header'>
            <div className='header__main'>
                <Link to='/'><img src={logo} alt="logo" className='header__logo'/></Link>
                {props.isLoggedIn ? (<Navigation isMenuOpen={props.isMenuOpen} handleCloseMenu={props.handleCloseMenu}
                                                 handleOpenMenu={props.handleOpenMenu}/>) : (
                    <div className='header__main-container'>
                        <Link to='/signup'>
                            <button className='header__signUp'>Регистрация</button>
                        </Link>
                        <Link to='/signin'>
                            <button className='header__signIn'>Войти</button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
