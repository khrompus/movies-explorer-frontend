import React from 'react'
import {
    register,
    login,
    getSavedMovies,
    getUser,
    deleteMovie,
    updateProfile,
    saveMovie,
    checkToken
} from '../../utils/MainApi'
import {getMovies} from '../../utils/MoviesApi'
import {CurrentUserContext} from "../../context/CurrentUserContext";
import './App.css';
import Header from '../Header/Header'
import Main from "../Main/Main";
import {Route, Switch, Redirect, useHistory, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react'
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute";


function App() {
    const [loggedIn, setLoggedIn] = useState(
        Boolean(localStorage.getItem("loggedIn")) || false
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [preloaderAuth, setPreloaderAuth] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const [errorSignUp, setErrorSignUp] = useState(false);
    const [errorSignIn, setErrorSignIn] = useState(false);
    const [errorProfile, setErrorProfile] = useState(false);
    const [movies, setMovies] = useState([])
    const [savedMovies, setSavedMovies] = useState([]);
    const [presenceFilms, setPresenceFilms] = useState(false);
    const [foundMovies, setFoundMovies] = useState([]);
    const [profileSuccessful, setProfileSuccessful] = useState(false)
    const history = useHistory();
    const location = useLocation();

    function handleCloseMenu() {
        setIsMenuOpen(false)
    }

    function handleOpenMenu() {
        setIsMenuOpen(true)
    }

    //Проверка токена
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            checkToken(token)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true);
                        history.push(location.pathname);
                    }
                })
                .catch((err) => {

                    localStorage.removeItem("token");
                    history.push("/signin");
                    console.log(`${err}`);
                });
        }
    }, []);

    // Логин
    function handleLogin(email, password) {
        setPreloaderAuth(true);
        login(email, password).then((res) => {
            localStorage.setItem("token", res.token);
            localStorage.setItem("loggedIn", true);
            setLoggedIn(true);
            history.push("/movies");

        })
            .catch((err) => {
                setErrorSignIn(true);
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setPreloaderAuth(false);
                }, 300);
            });
    }


    function handleUpdateProfile({name, email}) {
        setPreloader(true);
        updateProfile({name: name, email: email})
            .then((res) => {
                setPreloader(true);
                setErrorProfile(false);
                setCurrentUser(res);
                setProfileSuccessful(true)
            })
            .catch((err) => {
                setErrorProfile(true);
                console.log(err);
                setProfileSuccessful(false)
            })
            .finally(() => {
                setTimeout(() => {
                    setPreloader(false);
                }, 300);
            });
    }

    // Регистрация
    function handleRegister(name, email, password) {
        setPreloaderAuth(true);
        register(name, email, password)
            .then(() => {
                handleLogin(email, password);
            })
            .catch((err) => {
                if (err) {
                    setErrorSignUp(true);
                    console.log(err);
                }
            })
            .finally(() => {
                setTimeout(() => {
                    setPreloaderAuth(false);
                }, 300);
            });
    }

    useEffect(() => {
        setPreloader(true);
        if (loggedIn) {
            Promise.all([
             getUser(),
             getMovies(),
             getSavedMovies(),
            ])
                .then(([userInf, allMovies, saveMovies]) => {
                    setCurrentUser(userInf);
                    setMovies(allMovies);
                    const currentUserSavedMovies = saveMovies.filter((m) => {
                        return m.owner._id === currentUser._id;
                    });
                    setSavedMovies(currentUserSavedMovies);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setPreloader(false);
                });
        }
    }, [loggedIn, currentUser._id]);


    const handleSaveMovie = (movie) => {
        saveMovie(movie)
            .then((res) => {
                setSavedMovies([...savedMovies, res]);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const handleDeleteMovie = (movie) => {
        const movieId = movie._id
            ? movie._id
            : savedMovies.find((item) => {
                return item.movieId === movie.id;
            })._id;

        deleteMovie(movieId)
            .then((res) => {
                if (res.message === "Фильм удалён!") {

                    const newArray = savedMovies.filter((item) => {
                        return item._id !== movieId;
                    });
                    setSavedMovies([...newArray]);

                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toggleLikeHandler = (movie, added) =>
        added ? handleSaveMovie(movie) : handleDeleteMovie(movie);

    const movieAdded = (movie) => {
        return savedMovies.find((item) => {
            return movie._id ? item._id === movie._id : item.movieId === movie.id;
        });
    };

    function handleSearchMovies(data) {
        setPreloader(true);
        const filteredArray = movies.filter((obj) => {
            return (
                obj.description?.toLowerCase().includes(data.toLowerCase()) ||
                obj.director?.toLowerCase().includes(data.toLowerCase()) ||
                obj.nameEN?.toLowerCase().includes(data.toLowerCase()) ||
                obj.nameRU?.toLowerCase().includes(data.toLowerCase())
            );
        });

        if (filteredArray.length !== 0) {
            setPresenceFilms(true);
        } else {
            setPresenceFilms(false);
        }

        setFoundMovies(filteredArray);
        localStorage.setItem("allMovies", JSON.stringify(filteredArray));

        setTimeout(() => {
            setPreloader(false);
        }, 300);
    }



    useEffect(() => {
        const allMoviesArray = JSON.parse(localStorage.getItem("allMovies"));
        setPresenceFilms(true);
        if (allMoviesArray) {
            setFoundMovies(allMoviesArray);
        }
    }, []);

    function handleSignOut() {
        setPreloader(false);
        localStorage.removeItem("token");
        setLoggedIn(false);
        setMovies([]);
        setCurrentUser({});
        localStorage.removeItem("allMovies");
        localStorage.removeItem("loggedIn");
        history.push("/");

    }
    return (
        <div className="App">
            <CurrentUserContext.Provider value={currentUser}>
                <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
                    <Header isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu}
                            isLoggedIn={loggedIn}/>
                </Route>
                <Switch>
                    <Route exact path='/'>
                        <Main/>
                    </Route>

                    <Route path='/signup'>
                        <Register error={errorSignUp} handleRegister={handleRegister} preloader={preloaderAuth}/>
                    </Route>
                    <Route path='/signin'>
                        <Login preloader={preloaderAuth} error={errorSignIn} handleAuthorize={handleLogin}/>
                    </Route>
                    <ProtectedRoute
                        path='/movies'
                        component={Movies}
                        loggedIn={loggedIn}
                        toggleLikeHandler={toggleLikeHandler}
                        movieAdded={movieAdded}
                        savedMovies={savedMovies}
                        movies={movies}
                        handleSearchMovies={handleSearchMovies}
                        preloader={preloader}
                        presenceFilms={presenceFilms}
                        foundMovies={foundMovies}
                    />

                    <ProtectedRoute
                        toggleLikeHandler={toggleLikeHandler}
                        movieAdded={movieAdded}
                        savedMovies={savedMovies}
                        loggedIn={loggedIn}
                        path='/saved-movies'
                        component={SavedMovies}
                    />
                    <ProtectedRoute profileSuccessful={profileSuccessful} loader={preloader} handleUpdateProfile={handleUpdateProfile} error={errorProfile}
                                    loggedIn={loggedIn} path='/profile' component={Profile} onSignOut={handleSignOut}/>
                    <Route path='/404'>
                        <PageNotFound />
                    </Route>
                    <Redirect to='/404' />
                </Switch>
                <Route exact path={["/", "/movies", "/saved-movies"]}>
                    <Footer/>
                </Route>

            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
