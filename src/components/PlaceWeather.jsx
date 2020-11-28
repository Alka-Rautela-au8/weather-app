import React, { Component } from 'react'
import { connect } from 'react-redux'
import kelvinToCelsius from 'kelvin-to-celsius'

class PlaceWeather extends Component {
    render() {
        const {weather, notFound} = this.props
        let average_temp = null
        let high_temp = null
        let low_temp = null

        let date = null
        let time = null

        let sunrise = null
        let sunset = null
        
        let type = null
        let humid = null
        let wind = null

        let country = null
        if(weather){
            if(weather.main){
                average_temp = kelvinToCelsius(weather.main.temp);
                high_temp = kelvinToCelsius(weather.main.temp_min);
                low_temp = kelvinToCelsius(weather.main.temp_max);
                humid = weather.main.humidity
            }
            if(weather.wind){
                wind = weather.wind.speed
            }

            let myDate = new Date( weather.dt*1000);
            console.log(myDate.toGMTString())
            console.log(myDate.toLocaleString())
            date = myDate.toGMTString().slice(0, 17)
            time = myDate.toLocaleString().slice(12)

            if(weather.weather){
                if(weather.weather[0]){
                   type =  weather.weather[0].main
                }
            }

            if(weather.sys){
                let rise = new Date( weather.sys.sunrise*1000)
                sunrise = rise.toLocaleString().slice(12, 17)
                console.log(sunrise)
                let set = new Date( weather.sys.sunset*1000)
                sunset = set.toLocaleString().slice(12, 17)
                console.log(sunset)
                country = weather.sys.country;
            }
        }


        return (
            <div className='weather-view'>
                {weather ? <>
                <div className='weather-view-inner'>
                    <div className="info-main">
                        <div className="place-name">
                            <h2>{weather.name}, {country}</h2>
                            <p>{date}, {time}</p>
                        </div>
                        <div className="temp">
                            <h1>{average_temp} &#176;C</h1>
                            <p>{type}</p>
                        </div>
                    </div>
                    <div className="info-more">
                        <div className="high-low card">
                            <div className="high">
                                <h2>{high_temp} &#176;C</h2>
                                <p>High</p>
                            </div>
                            <div className="low">
                                <h2>{low_temp} &#176;C</h2>
                                <p>Low</p>
                            </div>
                        </div>
                        <div className="rain-wind card">
                            <div className="high">
                                <h2>{wind} mph</h2>
                                <p>Wind</p>
                            </div>
                            <div className="low">
                                <h2>{humid} %</h2>
                                <p>Rain</p>
                            </div>
                        </div>
                        <div className="sunrise-sunset card">
                            <div className="sunrise">
                                <h2>{sunrise}</h2>
                                <p>Sunrise</p>
                            </div>
                            <div className="sunset">
                                <h2>{sunset}</h2>
                                <p>Sunset</p>
                            </div>
                        </div>
                    </div>
                </div>
                </>: 
(    !notFound ?   <div className="greeting">
                <h1>EXPLORE THE WEATHER</h1> 
                <p>HAVE A NICE DAY!</p>
                </div> : <><h2>Not Found</h2></>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        weather: state.weatherState.weather,
        notFound: state.weatherState.notFound,
    }
}

export default connect(mapStateToProps, null)(PlaceWeather)
