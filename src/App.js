import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Navbars from "./layouts/Navbar";
import PageNotFound from "./Components/404";
import Footer from "./layouts/Footer";
import Singlemoviespage from "./layouts/Singlemoviespage";
import Banner from "./layouts/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./layouts/Movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }
  handleRecMovies = movie => {
    this.setState({ movie });
  };
  render() {
    return (
      <React.Fragment>
        <Navbars title="" />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route
            path="/singlepagemovies"
            render={props => (
              <Singlemoviespage {...props} movie={this.state.movie} />
            )}
          />
          <Route path="/banner" component={Banner} />
          <Route
            path="/movies"
            render={props => (
              <Movies {...props} moviesData={this.handleRecMovies} />
            )}
          />
          <Route path="/pagenot" component={PageNotFound} />
          <Redirect to="/pagenot" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
