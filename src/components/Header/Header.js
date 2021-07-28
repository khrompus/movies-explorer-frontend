import './Header.css'
import React from "react";
import logo from '../../image/logo.png'
import { Link, Route, Switch } from 'react-router-dom';
function Header() {
return (
    <Switch>
    <Route exact path='/'>
        <header className='header'>
            <div className='header__main'>
                <Link to = '/'><img src={logo} alt="logo" className = 'header__logo'/></Link>
                <div className='header__main-container'>
                    <Link to='/sign-up'><button className='header__signUp'>Регистрация</button></Link>
                    <Link to='/sign-in'><button className='header__signIn'>Войти</button></Link>
                </div>
            </div>
        </header>
    </Route>
    </Switch>
)
}
export default Header
