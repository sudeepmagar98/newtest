import React, { Component } from "react";
import PopularMovies from "../Components/PopularMovies";
import ToRated from "../Components/Toprated";
import jocker from "../assets/images/jocker.jpg";
import styled from "styled-components";
import UpComing from "../Components/Upcoming";
class Movies extends Component {
  constructor() {
    super();
    this.handleRecMovies = this.handleRecMovies.bind(this);
    this.handleTopMovies = this.handleTopMovies.bind(this);
    this.handleUpMovies = this.handleUpMovies.bind(this);
  }
  handleRecMovies(movie) {
    // console.log(this)
    this.props.moviesData(movie);
  }
  handleTopMovies(movie) {
    this.props.moviesData(movie);
  }
  handleUpMovies(movie) {
    this.props.moviesData(movie);
  }
  render() {
    return (
      <MovieWrapper>
        <PopularMovies moviesData={this.handleRecMovies} />
        <ToRated moviesData={this.handleTopMovies} />
        <UpComing moviesData={this.handleUpMovies} />
      </MovieWrapper>
    );
  }
}
const MovieWrapper = styled.div`
  background-image: url(${jocker});
  height: 135vh;
  background-size: cover;
  position: relative;
  a {
    display: block;
    text-align: center;
    color: whitesmoke;
    background-color: "transparent";
  }
  a:hover {
    text-decoration: none;
    color: red;
  }
  h1 {
    color: whitesmoke;
  }
`;
export default Movies;
