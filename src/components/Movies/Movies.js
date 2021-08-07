import React from 'react'
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
    return (
        <section className='movies'>
            <SearchForm/>
            <div className='movies__container'>
                <MoviesCardList />
            </div>
            <button className='movies__button-more' type='button'>Ещё</button>
            {/*<Preloader/>*/}
        </section>
    )
}

export default Movies
