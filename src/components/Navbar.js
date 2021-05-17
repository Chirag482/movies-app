import React from "react";

import { handleMovieSearch, handleAddMovieToList } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(handleAddMovieToList(movie.imdbID));
    this.setState({
      showSearchResults: false,
    });
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
    if (this.state.searchText !== "") {
      const { searchText } = this.state;
      this.props.dispatch(handleMovieSearch(searchText));
    }
  };
  handleSearch = () => {
    if (this.state.searchText !== "") {
      const { searchText } = this.state;
      this.props.dispatch(handleMovieSearch(searchText));
    }
    return;
  };
  render() {
    const { showSearchResults } = this.props.search;
    const { result } = this.props.search;
    const searchText = this.state.searchText !== "" ? true : false;

    console.log("NAVBAR render result=> ", result);
    return (
      <div className="navbar">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && result.Response === "False" && searchText && (
            <div className="search-results">Movie Not Found!!</div>
          )}
          {showSearchResults && result.Response === "True" && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Search[0].Poster} alt="search-result-pic" />

                <div className="movie-info">
                  <span>{result.Search[0].Title}</span>
                  <button
                    onClick={() => this.handleAddToMovies(result.Search[0])}
                  >
                    Add to Movies
                  </button>
                </div>
              </div>
              {result.Search.length > 1 && (
                <div className="search-result">
                  <img src={result.Search[1].Poster} alt="search-result-pic" />

                  <div className="movie-info">
                    <span>{result.Search[1].Title}</span>
                    <button
                      onClick={() => this.handleAddToMovies(result.Search[1])}
                    >
                      Add to Movies
                    </button>
                  </div>
                </div>
              )}
              {result.Search.length > 2 && (
                <div className="search-result">
                  <img src={result.Search[2].Poster} alt="search-result-pic" />

                  <div className="movie-info">
                    <span>{result.Search[2].Title}</span>
                    <button
                      onClick={() => this.handleAddToMovies(result.Search[2])}
                    >
                      Add to Movies
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
