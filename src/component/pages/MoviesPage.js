import React, { Component } from "react";
import services from "../services";
import { Link } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
    isLoading: false
  };

  movieOnSubmit = e => {
    e.preventDefault();
    if (this.state.query === "") {
      alert("Enter movie name");
    } else {
      services
        .getSearchMovie(this.state.query)
        .then(data =>
          this.setState({ movies: data.data.results, isLoading: true })
        );
    }
  };

  handelCahnge = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <>
        <form onSubmit={this.movieOnSubmit} className="moviePageForm">
          <input
            type="text"
            autoFocus
            placeholder="Enter movie name"
            onChange={this.handelCahnge}
            className="moviepageInput"
          />
          <button type="submit" className="moviePageButton">
            Search
          </button>
        </form>
        {this.state.isLoading && (
          <ul className="homePageUl">
            {this.state.movies.map(movie => (
              <li key={movie.id} className="homePageLi">
                <Link
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: { id: movie.id }
                  }}
                >
                  <p>{movie.title || movie.name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="img films"
                    className="movieImg"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
