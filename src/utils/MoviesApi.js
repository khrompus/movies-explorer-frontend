import {movieUrl} from "./constants";

const parseResponse = (response) => {
    if (response.ok) {
        return response.json();
    }

    return Promise.reject(new Error(`Ошибка ${response.status}`));
};

const getMovies = () =>
    fetch(`${movieUrl}/beatfilm-movies`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((res) => parseResponse(res));
export {getMovies}
