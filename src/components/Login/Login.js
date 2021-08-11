import React, {useState, useEffect} from 'react'
import './Login.css'
import logo from '../../image/logo.png'
import {Link} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [emailError, setEmailError] = useState('Email не должен быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (passwordError || emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [emailError, passwordError])


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (!e.target.value) {
            setPasswordError("Пароль не должен быть пустым");
        } else {
            setPasswordError("");
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.handleAuthorize(email, password)
    }


    return (
        <section className='login'>
            <div className='login__container'>
                <div className='login__image-container'><Link to='/'><img className='login__image' src={logo}
                                                                          alt="logo"/></Link></div>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='login__form' onSubmit={handleSubmit}>
                    <div className='login__label-container'>
                        <label className='login__label'>
                            E-mail
                        </label>
                        <input required className='login__input' onChange={e => emailHandler(e)}
                               onBlur={e => blurHandler(e)} type='email' value={email} name='email'
                               placeholder='E-mail'
                               id='loginEmail'/>
                        {(emailDirty && emailError) && <span className='login__form-error'>{emailError}</span>}

                    </div>

                    <div className='login__label-container'>
                        <label className='login__label'>
                            Пароль
                        </label>
                        <input required className='login__input' type='password' onChange={e => passwordHandler(e)}
                               onBlur={e => blurHandler(e)} value={password} name='password'
                               placeholder='Пароль'
                               id='loginPassword'/>
                        {(passwordDirty && passwordError) && <span className='login__form-error'>{passwordError}</span>}

                    </div>

                    <button disabled={!formValid} className='login__submit' type='submit'>Войти</button>

                </form>
                {props.error && (<span id='submit-error ' className='login__form-error login__form-error-under-button'>При авторизации произошла ошибка.</span>)}
                <div className='login__content'>
                    <p className='login__text'>Ещё не зарегистрированы?</p>
                    <Link to='/signup'>
                        <button className='login__sign-up'>Регистрация</button>
                    </Link>
                </div>
            </div>
            {props.preloader && <Preloader/>}
        </section>
    )
}

export default Login
