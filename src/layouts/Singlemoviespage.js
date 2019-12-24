import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

class SingleMoviesPage extends Component {
  state = {};
  render() {
    const { movie } = this.props;
    return (
      <MovieWrapper>
        <Container>
          <Row>
            <Col md="6">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
              />
            </Col>
            <Col md="6">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <h6>{movie.release_data}</h6>
            </Col>
          </Row>
        </Container>
      </MovieWrapper>
    );
  }
}
const MovieWrapper = styled.div`
  background-color: #3d0303;
  height: 50vh;
  h2,
  p,
  h6 {
    color: whitesmoke;
  }
`;
export default SingleMoviesPage;
