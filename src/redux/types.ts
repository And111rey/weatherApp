export const CURRENT_WEATHER = 'CURRENT_WEATHER';
export const ON_LOADING = 'IS_LOADING';
export const OFF_LOADING = 'OFF_LOADING';
export const FORECAST = 'FORECAST';


export type Action =
  | { type: typeof ON_LOADING }
  | { type: typeof OFF_LOADING }
  | { type: typeof CURRENT_WEATHER, payload: any }
  | { type: typeof FORECAST, payload: any[] };
  
  
  export interface WeatherState {
    isLoad: boolean;
    weatherData: any; // Замените "any" на соответствующий тип
    forecast: any[]; // Замените "any" на соответствующий тип
  }


