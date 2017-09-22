import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from './Chart'
import GoogleMap from './GoogleMaps'
import './Weather_List.css'


class WeatherList extends Component {

  // for rendering a single city (single row)
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp - 273.15)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const city = cityData.city.name
    
    // es6 syntax. Go into cityData.city.coord and grab the lon and lat 
    //  props off of it, and assign it to 2 new vars, lon and lat
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap city={city} lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }

  // rendering the whole table
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather.bind(this)) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) { // we can replace 'state' in the parameter with { weather }
  console.log(weather)  
  return { weather } // ES6 syntax --> identical to { weather: weather } 
}

export default connect(mapStateToProps)(WeatherList)