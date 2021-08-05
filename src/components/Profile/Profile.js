import React from 'react'
import './Profile.css'
import {Link} from "react-router-dom";

function Profile() {
    return (
    <section className='profile'>
        <h2 className='profile__title'>Привет, Владислав!</h2>
        <form className='profile__form'>
            <div className='profile__label-container'>
                <label className='profile__label'>
                    Имя
                </label>
                <input className='profile__input' id='profileName' type='name' name='profile-name' placeholder='Здесь будет имя пользователя'/>
            </div>
            <div className='profile__label-container profile__label-container_margin'>
                <label className='profile__label'>
                    Почта
                </label>
                <input className='profile__input' id='profileEmail' type='email' name='profile-email' placeholder='Здесь будет почта пользователя'/>
            </div>
        </form>
        <button className='profile__button'>Редактировать</button>
        <Link to='/'><button className='profile__button profile__button_red'>Выйти из аккаунта</button></Link>
    </section>
    )
}
export default Profile
