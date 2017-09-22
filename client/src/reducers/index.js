import { combineReducers } from 'redux';
import WeatherReducer from './Reducer_Weather'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
