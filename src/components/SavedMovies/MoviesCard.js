import React from 'react'
import '../MoviesCard/MoviesCard.css'

function MoviesCard({card, toggleLikeHandler, movieAdded}) {
    let added = movieAdded(card);


    const deleteSaveClick = (e) => {
        e.preventDefault();
        toggleLikeHandler(card, !added);
    };


    function timeHandler(data) {
        let hour = Math.trunc(data / 60);
        let minut = data % 60;
        return hour + "ч " + minut + "м";
    }

    return (

        <>
                <div className='card'>
                    <div className='card__content'>
                        <div className='card__container-text'>
                            <h2 className='card__title'>{card.nameRU}</h2>
                            <p className='card__subtitle'>{timeHandler(card.duration)}</p>
                        </div>
                        <button onClick={deleteSaveClick}  type='button' className='card__save-saved'/>
                    </div>
                    <a href={card.trailerLink} rel='noreferrer' target='_blank'>
                        <img className='card__image' src={card.image} alt="Обложка"/>
                    </a>
                </div>
        </>


    )
}

export default MoviesCard
