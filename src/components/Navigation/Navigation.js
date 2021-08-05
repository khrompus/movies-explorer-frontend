import React from 'react'
import './Navigation.css'
import {Link, NavLink} from "react-router-dom";
import profileLink from '../../image/profileIcon.png'
import menu from '../../image/menu.png'
import Menu from "../Menu/Menu";
function Navigation(props) {
    return (
        <div className='navigation'>
        <div className='navigation-content'>
            <NavLink activeClassName='navigation__button_font' className='navigation__button navigation__button_margin-zero' to='/movies'>
              Фильмы
            </NavLink>
            <NavLink activeClassName='navigation__button_font' className='navigation__button' to='/saved-movies'>
                Сохраненые фильмы
            </NavLink>
            <NavLink activeClassName='navigation__button_font' className='navigation__button navigation__button_margin' to='/profile'>
                    Аккаунт
                        <img className='navigation__profile-icon' src={profileLink} alt="profile"/>
            </NavLink>
        </div>
            <button onClick={props.handleOpenMenu} className='navigation__menu'><img className='navigation__menu-icon' src={menu} alt="menu"/></button>
            <Menu isMenuOpen={props.isMenuOpen} handleCloseMenu={props.handleCloseMenu} />
        </div>


    )
}

export default Navigation
