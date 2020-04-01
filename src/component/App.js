import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <ul className="appUl">
        <li className="appLi">
          {" "}
          <NavLink
            exact
            to="/"
            activeStyle={{
              color: "red",
              textDecoration: "none",
              fontWeight: "500"
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="appLi">
          {" "}
          <NavLink
            to="/movies"
            activeStyle={{
              color: "red",
              textDecoration: "none",
              fontWeight: "500"
            }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
      <Redirect to="/" />
    </>
  );
}

export default App;
