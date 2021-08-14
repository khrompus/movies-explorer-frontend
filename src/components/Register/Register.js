import React, {useState, useEffect} from 'react'
import './Register.css'
import {Link} from "react-router-dom";
import logo from '../../image/logo.png'
import Preloader from "../Preloader/Preloader";

function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        if (nameError || passwordError || emailError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }

    }, [emailError, passwordError, nameError])

    const emailHandler = (e) => {
       setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length > 30) {
            if (!e.target.value) {
                setNameError("Имя не может быть пустым");
            }
            setNameError("Имя не должно быть больше 30-ти символов");
        } else if (e.target.value.length < 2) {
            setNameError("Имя не должно быть больше 2х символов");
        } else {
            setNameError("");
        }
    };


    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Пароль должен быть больше 8-ми символов");
            if (!e.target.value) {
                setPasswordError("Пароль не должен быть пустым");
            }
        } else if (e.target.value.length > 255) {
            setPasswordError("Пароль должен быть меньше 255-ти символов");
        } else {
            setPasswordError("");
        }
    };


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name' :
                setNameDirty(true)
                break
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
        props.handleRegister(name, email, password)
    }


    return (
        <section className='register'>
            <div className='register__container'>
                <div className='register__container-image'>
                    <Link to='/'>
                        <img className='register__image' src={logo} alt="logo"/>
                    </Link>
                </div>

                <h2 className='register__title'>Добро пожаловать!</h2>
                <form className='register__form' onSubmit={handleSubmit}>
                    <div className='register__label-container'>
                        <label className='register__label'>
                            Имя
                        </label>
                        <input required   onChange={e => nameHandler(e)} minLength='2' onBlur={e => blurHandler(e)} className='register__input'  type="name" id='registerName'
                               name='name' value={name}/>
                        {(nameDirty && nameError) && <span id='register-name-error' className='register__form-error'>{nameError}</span>}
                    </div>



                    <div className='register__label-container'>
                        <label className='register__label'>
                            E-mail
                        </label>
                        <input  required className='register__input' onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" id='registerEmail'
                               name='email' value={email}/>
                        {(emailDirty && emailError) && <span id='register-email-error' className='register__form-error'>{emailError}</span>}
                    </div>

                    <div className='register__label-container'>
                        <label className='register__label'>
                            Пароль
                        </label>
                        <input minLength='8' onChange={e => passwordHandler(e)} required className='register__input' onBlur={e => blurHandler(e)} type="password" id='registerPassword'
                               name='password' value={password}/>
                        {(passwordDirty && passwordError) && <span id='register-password-error' className='register__form-error'>{passwordError}</span>}
                    </div>
                    <button disabled={!formValid} className='register__submit' type='submit'>Зарегистрироваться</button>
                </form>
                {props.error && (<span id='submit-error' className='register__form-error'>Ошибка регистрации</span>)}

                <div className='register__content'>
                    <p className='register__text'>Уже зарегистрированы?</p>
                    <Link to='/signin'>
                        <button className='register__sign-in'>Войти</button>
                    </Link>

                </div>
            </div>
            {props.preloader && <Preloader/>}
        </section>
    )
}

export default Register
