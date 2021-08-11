import React from "react";
import MoviesCard from "./MoviesCard";
import Preloader from "../Preloader/Preloader";
import '../MoviesCardList/MoviesCardList';

function MoviesCardList({toggleLikeHandler, movieAdded, preloader, showFoundMovies}) {

    return (
        <div className='card-list'>
            {showFoundMovies.length !== 0 ? (
                <>
                    {preloader ? (
                        <Preloader/>
                    ) : (
                        <>
                            {showFoundMovies.map((item) => {
                                return (
                                    <MoviesCard
                                        key={item._id}
                                        card={item}
                                        toggleLikeHandler={toggleLikeHandler}
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

    )
}

export default MoviesCardList;
