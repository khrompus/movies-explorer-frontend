import React, {useState, useEffect} from 'react'
import './SearchForm.css'
import searchIcon from '../../image/searchIcon.png'
import FilterActive from '../../image/filterActive.svg'
import FilterDisable from '../../image/filterDisable.svg'

function SearchForm({onSearch, onFilter, filter}) {

    const [text, setText] = useState('')

    const [textDirty, setTextDirty] = useState(false)

    const [textError, setTextError] = useState('Введите ключевое слово')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (textError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [textError])

    function textHandler(e) {
        setText(e.target.value)
        if (!e.target.value) {
            setTextError("Введите ключевое слово");
        } else {
            setTextError("");
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'text' :
                setTextDirty(true)
                break
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(text)
    }

    return (
        <div className='search'>
            <form className='search__form' onSubmit={handleSubmit}>
                <img className='search__icon' src={searchIcon} alt="Поиск"/>
                <input required className='search__input' type='text' onBlur={e => blurHandler(e)}
                       onChange={e => textHandler(e)} value={text} name='text' id='searchFilm' placeholder='Фильм'/>

                <button disabled={!formValid} type='submit' className='search__submit'>Найти</button>
            </form>
            {(textError && textDirty) && <span className='search__error'>{textError}</span>}
            <div className='search__filter-container'>


                <button onClick={onFilter} type='checkbox' className='search__filter-button'><img
                    className='search__filter'
                    src={filter ? FilterActive : FilterDisable}
                    alt="Фильтр"/></button>
                <p className='search__filter-text'>Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm
