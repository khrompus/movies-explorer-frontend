import React from 'react'
import './Footer.css'

function Footer() {
    return (
    <footer className='footer'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
            <p  className='footer__copyright'>© 2021</p>
            <div className='footer__links'>
                <a href='https://praktikum.yandex.ru/' target='_blank' className='footer__link'>Яндекс.Практикум</a>
                <a href='https://github.com/khrompus' target='_blank' className='footer__link'>Github</a>
                <a href='https://vk.com/id220850211' target='_blank' className='footer__link'>ВКонтакте</a>
            </div>

        </div>
    </footer>
    )
}
export default Footer
