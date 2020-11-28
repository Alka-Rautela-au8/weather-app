import { FETCH_SEARCHED_WEATHER, NOT_FOUND } from "../actionTypes";

const initialState = {
    weather: null,
    notFound: false,
}

export const weatherReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FETCH_SEARCHED_WEATHER:
            return {...state, weather: payload, notFound: false}
        case NOT_FOUND:
            return {...state, notFound: true, weather: null}
        default:{
            return state;
        }
    }
}