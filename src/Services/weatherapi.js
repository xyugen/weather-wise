import axios from "axios";

const URL = "https://api.weatherapi.com/v1/";

export const searchQuery = async (searchValue) => {
    return axios.get(`${URL}search.json?key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(searchValue)}`)
        .then(response => response.data)
        .catch(error => console.error(error));
}

export const weatherStatus = async (city) => {
    return axios.get(`${URL}current.json?key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(city)}&aqi=no`)
        .then(response => response.data)
        .catch(error => console.error(error));
}