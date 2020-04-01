import React, { Component } from "react";
import services from "../services";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    services
      .getTrending()
      .then(data => this.setState({ movies: data.data.results }));
  }

  render() {
    return (
      <>
        <h2 className="homePageTitle">Trending films today</h2>
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
                  alt="ads"
                  className="movieImg"
                />
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
