import React, { Component } from "react";
import services from "../services";
import { withRouter } from "react-router-dom";

class ReviwesLazy extends Component {
  state = {
    reviwesInfo: []
  };

  componentDidMount() {
    services
      .getReviewes(this.props.match.params.movieId)
      .then(data => this.setState({ reviwesInfo: data.data.results }));
  }

  render() {
    const { reviwesInfo } = this.state;
    console.log(reviwesInfo);
    return (
      <>
        {reviwesInfo.length === 0 && <h2>Rewiews was not found</h2>}
        <ul>
          {reviwesInfo.map(reviw => (
            <li key={reviw.id}>
              <h2>{reviw.author}</h2>
              <p>{reviw.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(ReviwesLazy);
