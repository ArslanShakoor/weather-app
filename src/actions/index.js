import axios from 'axios';
const API_KEY='42618fb18bc2866bf817902e8fed182e';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const  FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
	const URL = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(URL);
	return{

		type:  FETCH_WEATHER
	}
}