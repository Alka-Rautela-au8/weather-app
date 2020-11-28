import React, { Component } from 'react'
import PlaceWeather from '../components/PlaceWeather'
import SearchBar from '../components/SearchBar'

import './styles/home.scss'

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="search-bar-container">
                    <SearchBar/>
                </div>
                <PlaceWeather/>
            </div>
        )
    }
}

export default Home
