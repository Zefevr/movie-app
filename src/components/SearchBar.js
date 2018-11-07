import React from 'react';


const Search = (props) => {
  let resultList = null

  if (props.searching && (props.defaultTitle !== '')) {
    resultList = (
      <ul className="results">
        {props.results.map(item => (
          <li key={item.imdbID} onClick={() => props.clicked(item)}>
            <img src={item.Poster} alt="Movie Poster"/>
            <div className="resluts_text">{item.Title} {item.Year} </div>
          </li>
        ))}
      </ul>
    )
  }

  else if(props.noResults==="noResults"){
    resultList = (
      <p> Sorry but no movie was found, please try again </p>
      
    )
  }

  return (
    <div className="search">
      <input type="search" name="movie-search" value={props.defaultTitle} placeholder="Search movies here" onChange={props.search} />
      {resultList}
    </div>
  );
};

export default Search;
