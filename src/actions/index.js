import axios from 'axios';
const API_KEY="71deca9a23214b5df1e2218d418a58dc";
const API_URL=`api.openweathermap.org/data/2.5/forecast?app_id=${API_KEY}`;

export const  FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
	const URL = `${API_URL}& q=${city},us`;
	coust request = axios.get(URL);
	return{
		type:  FETCH_WEATHER
	}
}