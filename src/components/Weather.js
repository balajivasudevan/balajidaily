import React from "react";

import openweather from "../api/openweather";


class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = { current: null, min: null, max: null, condition: null}

        this.getWeather(0,0);

    }

    getWeather = async (lat, lon) => {
        const weatherResp = await openweather.get('/onecall', {
            params: { lat: 30.496180, lon: -97.778760}
        });

        this.setState( { 
            current: Math.round(weatherResp.data.current.temp), 
            min: Math.round(weatherResp.data.daily[0].temp.min),
            max: Math.round(weatherResp.data.daily[0].temp.max),
            condition: weatherResp.data.daily[0].weather[0].description
        })
    }

    render() {
        return (
            <div className="ui segment" style={{ margin: '10px'}}>
                <h4>Weather today</h4>
                <div className="field">
                    <label>Current: {this.state.current} &#176;F</label>
                </div>
                <div className="field">
                    <label>Today: {this.state.condition}</label>
                </div>
                <div className="field">
                    <label>Min: {this.state.min} &#176;F</label>
                </div>
                <div className="field">
                    <label>Max: {this.state.max} &#176;F</label>
                </div>
            </div>
        )
    }

}

export default Weather;