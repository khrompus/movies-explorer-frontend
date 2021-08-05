import './Promo.css'
import React from "react";

function Promo() {
    return (
        <div className='promo'>
            <h2 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h2>
            <div className='promo__list'>
                <a href='#about-project' className='promo__about'>О проекте</a>
                <a href='#tech' className='promo__about'>Технологии </a>
                <a href='#student' className='promo__about'>Студент</a>
            </div>
        </div>
    )
}

export default Promo
