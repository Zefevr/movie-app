import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/NavBar'
import MovieSearch from './components/MovieSearch'
import Home from './components/Home'
import Featured from './components/Featured'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/search" component={MovieSearch} />
          <Route path="/featured" component={Featured} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
