// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import SearchBar from './components/Search_Bar'
import WeatherList from './components/Weather_List'
import './App.css'; 

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Maps and Weather Forecast</h2>
          <h6>Explore a city and get the average of its monthly weather forecast</h6>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
