import './App.css';
import Header from '../Header/Header'
import Main from "../Main/Main";
import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {useState} from 'react'
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  //  В данный момент используется для смены header
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleCloseMenu() {
        setIsMenuOpen(false)
    }

    function handleOpenMenu() {
        setIsMenuOpen(true)
    }

    function handleLoggedIn() {
        setIsLoggedIn(true);
    }

    return (
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    <Header isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu}
                            isLoggedIn={isLoggedIn}/>
                    <Main/>
                    <Footer/>
                </Route>

                <Route path='/signup'>
                    <Register/>
                </Route>
                <Route path='/signin'>
                    <Login/>
                </Route>

                <Route exact path='/movies'>
                    <Header isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu}
                            isLoggedIn={isLoggedIn}/>
                    <Movies/>
                    <Footer/>
                </Route>
                <Route exact path='/saved-movies'>
                    <Header isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu}
                            isLoggedIn={isLoggedIn}/>
                    <SavedMovies/>
                    <Footer/>
                </Route>
                <Route exact path='/profile'>
                    <Header isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu}
                            isLoggedIn={isLoggedIn}/>
                    <Profile/>
                </Route>
                <Route path='*'>
                    <PageNotFound/>
                </Route>
            </Switch>


        </div>
    );
}

export default App;
