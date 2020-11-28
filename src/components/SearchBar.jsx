import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchWeather} from '../redux/actions/getWether'

class SearchBar extends Component {
    state = {
        searchQuery: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.searchQuery) {
            this.props.fetchWeather(this.state.searchQuery)
        }
    };

    handleChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search-bar">
                <input type="text" placeholder="search" onChange={this.handleChange}/>
            </form>
        )
    }
}

export default connect(null,{fetchWeather})(SearchBar)
