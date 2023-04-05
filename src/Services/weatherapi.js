import axios from "axios";

export const weatherStatus = async (city) => {
    const URL = "https://api.weatherapi.com/v1/";

    return axios.get(`${URL}current.json?key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(city)}&aqi=no`)
    .then(response => response.data)
    .catch(error => console.error(error));
}