import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

    renderWeather(citydata) {
        const city = citydata.city.name;
        var temps = _.map(citydata.list.map (weather => weather.main.temp), (temp) => temp - 273);
        const press = citydata.list.map(weather => weather.main.pressure);
        const humid = citydata.list.map(weather => weather.main.humidity);
        const { lat, lon } = citydata.city.coord;
        

        return (
            <tr key={city}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="red" units="°C" /></td>
                <td><Chart data={press} color="green" units="hPa" /></td>
                <td><Chart data={humid} color="blue" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);


