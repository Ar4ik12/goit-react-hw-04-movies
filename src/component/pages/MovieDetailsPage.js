import React, { Component, Suspense, lazy } from "react";
import services from "../services";
import { Link, Switch, Route, withRouter } from "react-router-dom";

const MovieCastLazy = lazy(() => import("../castLazy/CastLazy"));
const MovieReviwesLazy = lazy(() => import("../reviwesLazy/ReviwesLazy"));

class MovieDetailsPage extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    services
      .getMovieDetalies(this.props.location.state.id)
      .then(data => this.setState({ movie: data.data }));
  }

  clickBack = () => {
    const { history, location } = this.props;
    if (location.state.query === undefined) {
      history.push("/home");
    } else history.push(`/moviesSearch/?query=${location.state.query}`);
  };

  render() {
    const { movie } = this.state;
    return (
      <>
        <div>
          <button type="button" onClick={this.clickBack} className="movieDPButton">
            Go back
          </button>
          <div className="movieContainer">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="img films"
              className="movieImg"
            />
            <div className="divInfoMDP">
              <h2>{movie.original_title}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              {movie.genres &&
                movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                {" "}
                <Link to={{ pathname: `/movies/${movie.id}/cast` }}>Cast</Link>
              </li>
              <li>
                {" "}
                <Link to={{ pathname: `/movies/${movie.id}/reviwes` }}>
                  Reviwes
                </Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/movies/:movieId/cast" component={MovieCastLazy} />
                <Route
                  path="/movies/:movieId/reviwes"
                  component={MovieReviwesLazy}
                />
              </Switch>
            </Suspense>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
