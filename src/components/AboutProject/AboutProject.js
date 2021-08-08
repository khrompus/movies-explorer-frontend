import './AboutProject.css'
import React from "react";

function AboutProject() {
    return (
        <section id='about-project' className='project'>
            <h2 className='project__title'>О проекте</h2>
            <div className='project__group'>
                <div className='project__group-table'>
                    <h2 className='project__group-title'>Дипломный проект включал 5 этапов</h2>
                    <p className='project__group-subtitle'>
                        Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='project__group-table'>
                    <h2 className='project__group-title'>На выполнение диплома ушло 5 недель</h2>
                    <p className='project__group-subtitle'>
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='project__time-line'>
                <div className='project__time-line-first-container'>
                    <div className='project__time-line-first'>
                        <p className='project__time-line-first-text'>1 неделя</p>
                    </div>
                    <div className='project__time-line-second'>
                        <p className='project__time-line-second-text'>4 недели</p>
                    </div>
                </div>
                <div className='project__time-line-second-container'>
                    <p className='project__time-line-first-under'>Back-end</p>
                    <p className='project__time-line-second-under'>Front-end</p>
                </div>

            </div>
        </section>
    )
}

export default AboutProject
