import {baseUrl, movieUrl} from "./constants";


const parseResponse = (response) => {
    if (response.ok) {
        return response.json();
    }

    return Promise.reject(new Error(`Ошибка ${response.status}`));
};

const register = (name, email, password) => {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    })
        .then((response) => parseResponse(response));
}

const login = (email, password) => {
    return fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((response) => parseResponse(response));
};
const getUser = () => {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => parseResponse(response));
};


const updateProfile = (data) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
        }),
    }).then((response) => parseResponse(response));
};

const checkToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        parseResponse(res)
    })
};

const getSavedMovies = () =>
    fetch(`${baseUrl}/movies`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((response) => parseResponse(response));

const saveMovie = (data) => {
    const urlImg = `${movieUrl}` + data.image?.url;
    return fetch(`${baseUrl}/movies`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: urlImg,
            trailer: data.trailerLink,
            thumbnail: urlImg,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
        }),
    }).then((response) => parseResponse(response));
};

const deleteMovie = (movieId) => {
    return fetch(`${baseUrl}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json",
        },
    }).then((response) => parseResponse(response));
};

export {
    register,
    login,
    getSavedMovies,
    getUser,
    deleteMovie,
    updateProfile,
    saveMovie,
    checkToken
}
