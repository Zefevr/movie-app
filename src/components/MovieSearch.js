import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Search from './SearchBar';
import { API_KEY } from '../lib/constants';

class MovieSearch extends Component {
    state = {
      movieId: '', 
      title: "",
      movie: {},
      searchResults: [],
      noResults: "",
      isSearching: false,
      plot: "full"
    }

    componentDidMount() {
      this._mounted = true 
    }

    componentDidUpdate() {
      if (this.state.movieId !== "" && this.state.isSearching) {
        this.loadMovie()
        this.setState({isSearching: false})  
      }
    }

    componentWillUnmount() {
      this._mounted = false
    }


    loadMovie() {
      axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${this.state.movieId}&plot=${this.state.plot}`)
        .then(response => {

          if (this._mounted && response.data.Response !== "False"){
            this.setState({ movie: response.data });
          }
        })
          
      
        .catch(error => {
          console.log('Opps!', error.message);
        })
    }

    // Use a timeout to prevent the api request to fire immediately as we type
    timeout = null;

    searchMovie = (event) => {
      this.setState({ title: event.target.value, isSearching: true })

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.title}`)
          .then(response => {
            if (response.data.Search) {
              const movies = response.data.Search.slice(0, 10); // limited the search to a max of 10 movies
              this.setState({ searchResults: movies }); 
            }
            else if (response.data.Response === "False" && this.state.title.length > 3){
              this.setState({
                noResults: "noResults",
                isSearching: false,
                title:""
              })
            }
          })
          .catch(error => {
            console.log('Opps!', error.message);
          })
      }, 500)


    }

    // event handler for a search result item that is clicked
    itemClicked = (item) => {
      this.setState(
        {
          movieId: item.imdbID,
          title: item.Title
        }
      )
    }

    // event handler to restet the state and back to a new search
    backToSearch = () => {
      this.setState(
        {
          movieId: "",
          title: "",
          movie: {},
          searchResults: [],
          noResults: ""
        }
      )
    }

    // event handler to select how to plot details
    handleSelect(event) {
      this.setState({ plot: event.target.value });
    }


    render() {
      return (          
        <div>
          { this.state.movieId === "" ?   
            <div> 
              <label>
                Plot detials
              </label>
              <select
                className="plot_select"
                onChange={event => this.handleSelect(event)}
              >
                <option value="full">full</option>
                <option value="short">short</option>
              </select>  
                
              <Search
                defaultTitle={this.state.title}
                search={this.searchMovie}
                results={this.state.searchResults}
                clicked={this.itemClicked}
                searching={this.state.isSearching}
                noResults={this.state.noResults}/>
            </div>
            
            : <MovieCard 
              movie={this.state.movie} 
              back={this.backToSearch} />
          }
        </div>
        
      );
    }
}

export default MovieSearch;