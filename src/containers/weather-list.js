import React, { Component } from 'react';
import {connect} from 'react-redux';
import  Chart  from '../Components/chart'
import GoogleMap from '../Components/google_map'
 

class WeatherList extends  Component {

	renderWeatherData(cityData){
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		 
		const {lat,lon} = cityData.city.coord;
		console.log(lat,lon);

		return(
			<tr key={cityData.city.name}>
			  <td> <GoogleMap lon = {lon} lat = {lat} /> </td>
			  <td>
			   <Chart data={temps} color={"orange"} unit={'k'} factor = {9/5 - 459.67} />
              </td>
			  <td>
			   <Chart data={pressures} color={"red"}unit = {'hpa'} factor = {1} />
			  </td>
			  <td>
			   <Chart data={humidities} color={"yellow"} unit = {'%'} factor = {1} />
              </td>
			</tr>
			);
	}
	render(){
		return (
			<table className= "table table-hover">
			  <thead>
			    <tr>
			      <th>City</th>
			      <th>Temperature (F)</th>
			      <th>Pressure (hpa)</th>
			      <th>Humidity (%)</th>

			    </tr>
			  </thead>
			  <tbody>
               {this.props.weather.map(this.renderWeatherData)}
			  </tbody>
			</table>

		);
    }
}
function mapStateToProps({weather}){ 
	return { weather }; // {weather: weather}
}

export default connect (mapStateToProps)(WeatherList);