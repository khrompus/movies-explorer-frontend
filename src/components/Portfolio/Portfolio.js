import React from 'react'
import './Portfolio.css'
import arrow from '../../image/link.svg'

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__container'>
                <a href='https://github.com/khrompus/how-to-learn' target='_blank' rel='noreferrer' className='portfolio__link'>
                    <p className='portfolio__link-text'>Статичный сайт</p>
                    <img className='portfolio__link-image' src={arrow} alt='link'/>
                </a>
                <a href='https://khrompus.github.io/russian-travel/index.html' rel='noreferrer' target='_blank'  className='portfolio__link portfolio__link_border'>
                    <p className='portfolio__link-text '>Адаптивный сайт</p>
                    <img className='portfolio__link-image' src={arrow} alt='link'/>
                </a>
                <a href='https://khrompus.nomoredomains.monster' rel='noreferrer' target='_blank'  className='portfolio__link'>
                    <p className='portfolio__link-text'>Одностраничное приложение</p>
                    <img className='portfolio__link-image' src={arrow} alt='link'/>
                </a>
            </div>

        </section>
    )
}
 export default Portfolio
