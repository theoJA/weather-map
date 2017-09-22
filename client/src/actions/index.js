import axios from 'axios' // library for making ajax reqs
import { FETCH_WEATHER } from './types'

const API_KEY = '179563e89dc6a833d10f15d7216a7336'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// we are going to be making an action creator that will be responsible for creating 
//  an ajax request

// asynchronous in nature
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`
  const request = axios.get(url) // take the const url and make a get request on it
  // on line above, we made a promise called, request

  //console.log('Request:', request)
  // (this console log is good for seeing what request contains)

  return {
    type: FETCH_WEATHER,
    payload: request // promise is returned here as the payload
  }
}