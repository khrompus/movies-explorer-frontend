import React from 'react'
import './Register.css'
import { Link } from "react-router-dom";
import logo from '../../image/logo.png'
function Register() {
    return(
        <section className='register'>
          <Link to='/'><img className='register__image' src={logo} alt="logo"/></Link>
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className='register__form'>
                <div className='register__label-container'>
                    <label className='register__label'>
                        Имя
                    </label>
                    <input className='register__input' type="name" id='registerName' name='register-name'/>
                </div>

                <div className='register__label-container'>
                    <label className='register__label'>
                        E-mail
                    </label>
                    <input className='register__input' type="email" id='registerEmail' name='register-email'/>
                </div>

                <div className='register__label-container'>
                    <label className='register__label'>
                        Пароль
                    </label>
                    <input className='register__input' type="password" id='registerPassword' name='register-password'/>
                </div>
                <button className='register__submit' type='submit'>Зарегистрироваться</button>
            </form>
            <div className='register__content'>
                <p className='register__text'>Уже зарегистрированы?</p>
                <Link to='/signin'><button className='register__sign-in'>Войти</button></Link>

            </div>
        </section>
    )
}
export default Register