import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'

// #1 Create a class for the component
class SearchBar extends Component {

  state = { term: '' }

  onInputChange(event) {
    this.setState({ term: event.target.value }) 
    // before binding this, this won't be referring to the instance of the 
    //  SearchBar class
  }

  onFormSubmit(event) {
    event.preventDefault()
    // prevents page from refreshing when form is submitted
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input 
          placeholder="Enter a city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)} // callback with a this
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// #3 map the dispatch props function to component to create a container
// "null" in 1st arg because this container doesn't care about the state contained 
//  in the app
export default connect(null, { fetchWeather })(SearchBar)