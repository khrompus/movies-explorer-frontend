import React, {useState} from 'react'
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {durationMovie} from "../../utils/constants";

function Movies({
                    toggleLikeHandler,
                    movieAdded,
                    savedMovies,
                    handleSearchMovies,
                    preloader,
                    presenceFilms,
                    foundMovies
                }) {

    const [filter, setFilter] = useState(false);

    const filterMovies = (movies) =>
        movies.filter((item) => {
            return item.duration <= durationMovie;
        });

    const onFilter = () => {
        setFilter(!filter);
    };

    return (
        <section className='movies'>
            <SearchForm onSearch={handleSearchMovies} filter={filter} onFilter={onFilter}/>
            <div className='movies__container'>
                {presenceFilms ? (
                    <MoviesCardList
                        foundMovies={filter ? filterMovies(foundMovies) : foundMovies}
                        preloader={preloader}
                        toggleLikeHandler={toggleLikeHandler}
                        savedMovies={savedMovies}
                        movieAdded={movieAdded}
                    />
                ) : (
                    <h3>Ничего не найдено</h3>
                )}
            </div>

            {/*<Preloader/>*/}
        </section>
    )
}

export default Movies
