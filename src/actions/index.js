import axios from 'axios';

const API_KEY = '72c21ab22dbd6d374e92ca2bf1412796'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fi`;
    const request = axios.get(url);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}
