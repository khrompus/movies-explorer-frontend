import React from 'react'
import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
function SavedMovies() {

 return(
     // Временное решние , на 4 этапе будет сделано через MovieCardList
     <section className='saved-movies'>
        <SearchForm/>
        <div className='saved-movies__container'>
            <MoviesCardList/>
            {/*<div className='card'>*/}
            {/*    <div className='card__content'>*/}
            {/*        <div className='card__container-text'>*/}
            {/*            <h2 className='card__title'>33 слова о дизайне</h2>*/}
            {/*            <p className='card__subtitle'>1ч 47м</p>*/}
            {/*        </div>*/}
            {/*        <button onClick={handleSaveCard} type='button' className='card__save'/>*/}
            {/*    </div>*/}
            {/*    <img className='card__image' src={pic} alt="Обложка"/>*/}
            {/*</div>*/}
            {/*<div className='card'>*/}
            {/*    <div className='card__content'>*/}
            {/*        <div className='card__container-text'>*/}
            {/*            <h2 className='card__title'>33 слова о дизайне</h2>*/}
            {/*            <p className='card__subtitle'>1ч 47м</p>*/}
            {/*        </div>*/}
            {/*        <button onClick={handleSaveCard} type='button' className='card__save'/>*/}
            {/*    </div>*/}
            {/*    <img className='card__image' src={pic} alt="Обложка"/>*/}
            {/*</div>*/}
            {/*<div className='card'>*/}
            {/*    <div className='card__content'>*/}
            {/*        <div className='card__container-text'>*/}
            {/*            <h2 className='card__title'>33 слова о дизайне</h2>*/}
            {/*            <p className='card__subtitle'>1ч 47м</p>*/}
            {/*        </div>*/}
            {/*        <button onClick={handleSaveCard} type='button' className='card__save'/>*/}
            {/*    </div>*/}
            {/*    <img className='card__image' src={pic} alt="Обложка"/>*/}
            {/*</div>*/}
        </div>
     </section>
 )
}
export default SavedMovies
