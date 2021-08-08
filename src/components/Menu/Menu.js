import React from 'react'
import './Menu.css'
import exit from '../../image/Exit.png'
import {Link, NavLink} from "react-router-dom";
import profileLink from "../../image/profileIcon.png";

function Menu(props) {
    let activeMenu = '';
    if (props.isMenuOpen) {
        activeMenu = 'menu_active'
    } else {
        activeMenu = ''
    }
    return (
        <div className={`menu ${activeMenu}`}>
            <div className='menu__container'>

                <button onClick={props.handleCloseMenu} className='menu__exit'><img className='menu__exit-icon'
                                                                                    src={exit} alt="exit-menu"/>
                </button>
                <ul className='menu__content'>
                    <NavLink activeClassName='menu__link-active' className='menu__link' to='/' exact>
                        Главная
                    </NavLink>
                    <NavLink activeClassName='menu__link-active' className='menu__link' to='/movies'>
                        Фильмы
                    </NavLink>
                    <NavLink activeClassName='menu__link-active' className='menu__link' to='/saved-movies'>
                        Сохраненые фильмы
                    </NavLink>
                </ul>
                <button className='menu__link-button'>
                    <NavLink activeClassName='menu__link-active' className='menu__link-profile' to='/profile'>
                        Аккаунт
                    </NavLink>
                    <img className='menu__profile-icon' src={profileLink} alt="profile"/>
                </button>
            </div>
        </div>
    )
}

export default Menu
