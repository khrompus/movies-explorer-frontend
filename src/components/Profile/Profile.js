import React, {useState, useEffect} from 'react'
import './Profile.css'
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {Link} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)

    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)

    const [nameError, setNameError] = useState('Имя не может быть пустым')
    const [emailError, setEmailError] = useState('Email не может быть пустым')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (nameError ||  emailError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }

    }, [emailError, nameError])

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
        if (currentUser.name === name){
            setFormValid(false)
        }else{
            setFormValid(true)
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
        }
    }



    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            name: name,
            email: email
        };
        props.handleUpdateProfile(data);
    }







    return (
    <section className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
            <div className='profile__label-container'>
                <label className='profile__label'>
                    Имя
                </label>
                <input className='profile__input' id='profileName' type='name' onChange={e => nameHandler(e)} name='name' onBlur={e => blurHandler(e)} value={name} placeholder='Имя'/>

            </div>
            {(nameError && nameDirty) && <span className='profile__form-error'>{nameError}</span>}

            <span className='profile__form__line'/>
            <div className='profile__label-container profile__label-container_margin'>
                <label className='profile__label'>
                    Почта
                </label>
                <input className='profile__input' id='profileEmail' onChange={e => emailHandler(e)} type='email' onBlur={e => blurHandler(e)} name='email' value={email} placeholder='E-mail'/>
            </div>
            {(emailError && emailDirty)  && <span className='profile__form-error'>{emailError}</span>}
            {props.error && (<span id='submit-error' className='profile__form-error'>При обновлении профиля произошла ошибка.</span>)}
            <button disabled={!formValid} type='submit' className='profile__button'>Редактировать</button>
        </form>


        <Link to='/'><button onClick={props.onSignOut} className='profile__button profile__button_red'>Выйти из аккаунта</button></Link>
        {props.preloader && <Preloader/>}

    </section>
    )
}
export default Profile
