import React from 'react'
import './AboutMe.css'
import me from '../../image/I.jpg'
function AboutMe() {
return (
    <section id='student' className='aboutMe'>
        <h2 className='aboutMe__title'>Студент</h2>
        <div className='aboutMe__container'>
            <div className='aboutMe__content'>
                <h3 className='aboutMe__subtitle'>
                    Владислав
                </h3>
                <p className='aboutMe__age'>Фронтенд-разработчик, 19 лет</p>
                <p className='aboutMe__text'>
                    Я родился и живу в Стерлитамаке, закончил 11 класс. В 2018 году ходил на курсы по Фронтенд-разработке,
                    но этого мне показалось мало.
                    Спустя 2 года я начал учится на платформе Яндекса.
                    Люблю выезжать на природу и слушать музыку.
                </p>
                <div className='aboutMe__links'>
                    <a className='aboutMe__link' target='_blank' href='https://vk.com/id220850211'>ВКонтакте</a>
                    <a className='aboutMe__link' target='_blank' href='https://github.com/khrompus'>Github</a>
                </div>
            </div>
            <img className='aboutMe__image' src={me} alt="student"/>
        </div>
    </section>
)
}
export default AboutMe
