import React, { Component } from "react";
import services from "../services";
import { withRouter } from "react-router-dom";

class CastLazy extends Component {
  state = {
    castInfo: []
  };
  componentDidMount() {
    services
      .getCast(this.props.match.params.movieId)
      .then(data => this.setState({ castInfo: data.data.cast }));
  }

  render() {
    const { castInfo } = this.state;
    console.log(castInfo);
    return (
      <>
        <ul className="castList">
          {castInfo.map(cast => (
            <li key={cast.id} className="castItem">
              {" "}
              <p>{cast.name}</p>
              <img
                className="castImg"
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                alt="img"
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(CastLazy);
