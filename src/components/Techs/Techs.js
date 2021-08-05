import React from 'react'
import './Techs.css'
function Techs() {
 return (
     <section className='techs' id='tech'>
         <h2 className='techs__title'>Технологии</h2>
         <div className='techs__container'>
             <h2 className='techs__subtitle'>7 технологий</h2>
             <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
             <ul className='techs__list'>
                 <li className='techs__list-unit'>HTML</li>
                 <li className='techs__list-unit'>CSS</li>
                 <li className='techs__list-unit'>JS</li>
                 <li className='techs__list-unit'>React</li>
                 <li className='techs__list-unit'>Git</li>
                 <li className='techs__list-unit'>Express.js</li>
                 <li className='techs__list-unit'>mongoDB</li>
             </ul>
         </div>
     </section>
 )
}
export default Techs
