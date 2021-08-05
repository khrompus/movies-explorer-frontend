import React, {useState} from 'react'
import './SearchForm.css'
import searchIcon from '../../image/searchIcon.png'
import FilterActive from '../../image/filterActive.svg'
import FilterDisable from '../../image/filterDisable.svg'

function SearchForm() {
    const [isFilter, setIsFilter] = useState(false);

    function handleSwitchFilter() {
        setIsFilter(!isFilter)
    }

    return (
        <div className='search'>
            <form className='search__form'>
                <img className='search__icon' src={searchIcon} alt="Поиск"/>
                <input className='search__input' type='text' name='search' id='searchFilm' placeholder='Фильм'/>
                <button className='search__submit'>Найти</button>
            </form>
            <div className='search__filter-container'>
                <button onClick={handleSwitchFilter} className='search__filter-button'><img className='search__filter'
                                                                                            src={isFilter ? FilterActive : FilterDisable}
                                                                                            alt="Фильтр"/></button>
                <p className='search__filter-text'>Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm
