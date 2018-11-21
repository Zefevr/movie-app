import React, { Component } from "react";
import axios from 'axios';
import { API_KEY } from '../lib/constants';

export default class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieFeaturedOne: null,
      movieFeaturedTwo: null
    }
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?t=thor&apikey=${API_KEY}&plot=full`)
      .then(response => {
        this.setState({ movieFeaturedOne: response.data });
      });

    axios.get(`http://www.omdbapi.com/?t=memento&apikey=${API_KEY}&plot=full`)
      .then(response => {
        this.setState({ movieFeaturedTwo: response.data });
      })
  }

  render() {
    if (this.state.movieFeaturedOne && this.state.movieFeaturedTwo) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 movieFeaturedOne">
              <img className="imgage_featured"
              
                src={this.state.movieFeaturedOne.Poster}
                alt={this.state.movieFeaturedOne.Title}
              />
              <div className="featured_details">
                <h5>{this.state.movieFeaturedOne.Title}</h5>
                <p>
                  <strong>Year:</strong>
                  {" " + this.state.movieFeaturedOne.Year}
                </p>
                <p>
                  <strong>Awards:</strong>
                  {" " + this.state.movieFeaturedOne.Awards}
                </p>
                <p>
                  {" " + this.state.movieFeaturedOne.Plot}
                </p>
              </div>
            </div>
            <div className="col-md-6 movieFeaturedTwo">
              <img className="imgage_featured"
                src={this.state.movieFeaturedTwo.Poster}
                alt={this.state.movieFeaturedTwo.Title}
              />
              <div className="featured_details">
                <h5>{this.state.movieFeaturedTwo.Title}</h5>
                <p>
                  <strong>Year:</strong>
                  {" " + this.state.movieFeaturedTwo.Year}
                </p>
                <p>
                  <strong>Awards:</strong>
                  {" " + this.state.movieFeaturedTwo.Awards}
                </p>
                <p>
                  {" " + this.state.movieFeaturedTwo.Plot}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
