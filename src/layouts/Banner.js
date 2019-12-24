import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner.jpg";
class Banner extends Component {
  state = {};
  render() {
    return (
      <BannerWrapper>
        <div className="box">
          <h1>Search Best Movies</h1>
          <Link className="btn" to="/movies">
            Search
          </Link>
        </div>
      </BannerWrapper>
    );
  }
}
const BannerWrapper = styled.section`
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 0,
    100% 79%,
    47% 78%,
    20% 100%,
    0 100%,
    0 0
  );
  background-image: url(${banner});
  height: 100vh;
  background-size: cover;
  position: relative;

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-style: 50px;
      color: #fff;
    }
    a {
      background-color: #fff;
      width: 30%;
      display: block;
      text-align: center;
      color: #000;
      font-weight: 700;
      border-radius: 100px;
      padding: 7px;
      margin: 40px auto;
    }
    a:hover {
      text-decoration: none;
      color: blue;
      background-color: orange;
    }
  }
`;

export default Banner;
