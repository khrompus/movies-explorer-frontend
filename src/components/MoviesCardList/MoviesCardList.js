import React, {useState, useEffect} from 'react'
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {desktopWidth, tabletWidth, phoneWidth} from "../../utils/constants";

function MoviesCardList({foundMovies, preloader, toggleLikeHandler, savedMovies, movieAdded}) {

    const [showFoundMovies, setShowFoundMovies] = useState([]);
    let count;

    function getQuantity(windowSize) {
        if (windowSize >= desktopWidth) {
            return {first: 12, next: 3};
        }
        if (windowSize > phoneWidth && windowSize <= tabletWidth) {
            return {first: 8, next: 2};
        }
        return {first: 5, next: 2};
    }

    const resizeHandler = () => {
        const windowSize = window.innerWidth;
        const countFirst = getQuantity(windowSize);
        if (!count || count.first !== countFirst.first) {
            count = countFirst;
            setShowFoundMovies(foundMovies.slice(0, count.first));
        }
    };
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    useEffect(() => {
        resizeHandler();
    }, []);


    useEffect(() => {
        const windowSize = window.innerWidth;
        const countFirst = getQuantity(windowSize);
        count = countFirst;
        setShowFoundMovies(foundMovies.slice(0, count.first));
    }, [foundMovies]);

    function addMore() {
        const windowSize = window.innerWidth;
        const countNext = getQuantity(windowSize);
        count = countNext;
        const last = showFoundMovies.length;
        setShowFoundMovies(
            showFoundMovies.concat(foundMovies.slice(last, last + count.next))
        );
    }

    return (
        <div>
            <div className='card-list'>
                {showFoundMovies ? (
                    <>
                        {preloader ? (
                            <Preloader/>
                        ) : (
                            <>
                                {showFoundMovies.map((item) => {
                                    return (
                                        <MoviesCard
                                            card={item}
                                            key={item._id}
                                            toggleLikeHandler={toggleLikeHandler}
                                            savedMovies={savedMovies}
                                            movieAdded={movieAdded}
                                        />
                                    );
                                })}


                            </>
                        )}
                    </>
                ) : (
                    <h3 className='text-nothing-found'>Ничего не найдено</h3>
                )}


            </div>
            {showFoundMovies.length < foundMovies.length && (

                <button
                    onClick={addMore}
                    className='card-list__button-more'
                >
                    Еще
                </button>

            )}
        </div>
    )
}

export default MoviesCardList
