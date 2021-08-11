import React, {useState,useEffect} from 'react'
import './SavedMovies.css'
import MoviesCardList from "./MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { durationMovie } from "../../utils/constants";
import {getSavedMovies} from "../../utils/MainApi";
function SavedMovies({ toggleLikeHandler, movieAdded, savedMovies, }) {
    const [showFoundMovies, setShowFoundMovies] = useState([]);
    const [preloader, setPreloader] = useState(false);

    useEffect(() => {
        setShowFoundMovies(savedMovies);
    }, [showFoundMovies]);

    const [filter, setfilter] = useState(false);
    const filterMovies = (movies) =>
        movies.filter((item) => item.duration < durationMovie);

    const onFilter = () => {
        setfilter(!filter);
    };

    function handleSearchMovies(data) {
        setPreloader(true);
        const filteredArray = savedMovies.filter((obj) => {
            return (
                obj.description?.toLowerCase().includes(data.toLowerCase()) ||
                obj.director?.toLowerCase().includes(data.toLowerCase()) ||
                obj.nameEN?.toLowerCase().includes(data.toLowerCase()) ||
                obj.nameRU?.toLowerCase().includes(data.toLowerCase())
            );
        });

        setShowFoundMovies(filteredArray);

        setTimeout(() => {
            setPreloader(false);
        }, 300);
    }


 return(
     <section className='saved-movies'>
        <SearchForm onSearch={handleSearchMovies} filter={filter} onFilter={onFilter}/>
        <div className='saved-movies__container'>
            {savedMovies.length !== 0 || showFoundMovies.length !== 0 ? (
                <MoviesCardList
                    movieAdded={movieAdded}
                    preloader={preloader}
                    showFoundMovies={
                        filter ? filterMovies(showFoundMovies) : showFoundMovies
                    }
                    toggleLikeHandler={toggleLikeHandler}
                />
            ) : (
                <h3 className='text-nothing-found'>Ничего не найдено</h3>
            )}
        </div>
     </section>
 )
}
export default SavedMovies
