import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

class UpComing extends Component {
  constructor() {
    super();
    this.state = {
      upmovies: [],
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=74414556191f067bc88a8b0b6338cdda&language=en-US&page=1`
    };
  }
  componentDidMount() {
    //get request
    //post request
    //delete request
    //put or patch request

    Axios.get(this.state.url).then(res =>
      this.setState({ upmovies: res.data.results })
    );
  }
  render() {
    return (
      <React.Fragment>
        <h1>UP-Coming Movies</h1>
        <Container>
          <Row>
            {this.state.upmovies.map((movie, index) => {
              if (index < 4) {
                return (
                  <Col md="3" onClick={() => this.props.moviesData(movie)}>
                    <Link to={`/singlepagemovies/${movie.id}`}>
                      <Card
                        style={{
                          width: "17.5rem",

                          border: "1px solid transparent",
                          boxShadow:
                            "0 10px 20px rgba(0,0,0,0.80), 0 6px 6px rgba(0,0,0,0.50)",
                          borderRadius: "5px",
                          margin: "5px",
                          backgroundColor: "transparent"
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        />
                        <Card.Body>
                          <Card.Title>{movie.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default UpComing;
