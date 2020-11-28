import axios from 'axios';
import { FETCH_SEARCHED_WEATHER, NOT_FOUND } from '../actionTypes';

const key = 'b1753b8e188a5600bcad02a8227612ee'

export const fetchWeather = (city) => async(dispatch) => {
    try{
        dispatch({type: NOT_FOUND,  payload: false})
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`) 
        console.log(data)
        dispatch({type: FETCH_SEARCHED_WEATHER, payload: data})
    }catch(err){
        console.log(err.message)
        dispatch({type: NOT_FOUND,  payload: true})
    }
} 