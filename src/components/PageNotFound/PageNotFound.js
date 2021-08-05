import React from 'react'
import './PageNotFound.css'
import {Link} from "react-router-dom";

function PageNotFound() {
    return(
        <div className='page-not-found'>
            <div className='page-not-found__content'>
                <h2 className='page-not-found__title'>404</h2>
                <p className='page-not-found__subtitle'>Страница не найдена</p>
            </div>
            <Link to='/'><button className='page-not-found__button'>Назад</button></Link>

        </div>
    )
}
export default PageNotFound
