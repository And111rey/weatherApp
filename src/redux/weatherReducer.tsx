import {
  CURRENT_WEATHER,
  ON_LOADING,
  OFF_LOADING,
  FORECAST,
  Action,
  WeatherState,
} from './types';

const initialState: WeatherState = {
  isLoad: false,
  weatherData: null,
  forecast: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ON_LOADING:
      return {...state, isLoad: true};
    case OFF_LOADING:
      return {...state, isLoad: false};
    case CURRENT_WEATHER:
      return {...state, weatherData: action.payload};
    case FORECAST:
      return {...state, forecast: action.payload};

    default:
      return state;
  }
};
