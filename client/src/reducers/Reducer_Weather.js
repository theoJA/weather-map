import { FETCH_WEATHER } from '../actions/types'

export default function(state = [], action) {
  // the action here should contain the same thing as the payload 

  //console.log('Action received', action)
  // (this console log is good for seeing what action contains)

  switch (action.type) {
    case FETCH_WEATHER: 
    //return state.concat([action.payload.data]) --> old JS syntax
      return [ action.payload.data, ...state ] // --> new ES6 syntax ... will flatten the new array
    // (Note that action.payload.data will appear at the front of the new array)
    // its a bad idea to mutate the state in redux using push()
    // instead we should create and return a new state using concat()
    
    default:
      return state
  }  
}