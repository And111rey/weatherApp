import axios from 'axios';
import {CURRENT_WEATHER, ON_LOADING, OFF_LOADING, FORECAST} from '../types';
import {Dispatch} from 'redux';

const API_KEY = 'af07a27e704844b5ab385129242303';

type ForecastItem = {
  date: string;
  min: string;
  max: string;
  img: string;
  description: string;
};

type Location = {
  latitude: string;
  longitude: string;
  days?: string;
};

type ForecastDay = {
  date: string;
  day: {
    mintemp_c: string;
    maxtemp_c: string;
    condition: {
      icon: string;
      text: string;
    };
  };
};

export const getCurrentWeatherAction =
  ({latitude, longitude}: Location) =>
  async (dispatch: Dispatch) => {
    dispatch({type: ON_LOADING});
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`,
      );
      dispatch({type: CURRENT_WEATHER, payload: response.data});
    } catch (e) {
      console.log(e);
    }
    dispatch({type: OFF_LOADING});
  };

export const getCurrentWeatherActionForDays =
  ({latitude, longitude, days}: Location) =>
  async (dispatch: Dispatch) => {
    dispatch({type: ON_LOADING});
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=${days}`,
      );
      const forecastArr: ForecastItem[] =
        response?.data?.forecast?.forecastday.map(
          (el: ForecastDay, i: number) => {
            return {
              date: el.date,
              min: el.day.mintemp_c,
              max: el.day.maxtemp_c,
              img: el.day.condition.icon,
              description: el.day.condition.text,
            };
          },
        );

      dispatch({type: FORECAST, payload: forecastArr});
    } catch (e) {
      console.log(e);
    }
    dispatch({type: OFF_LOADING});
  };
