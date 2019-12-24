import React, { Component } from "react";
import Free from "../assets/images/Free.jpg";
import styled from "styled-components";

class Footer extends Component {
  state = {};
  render() {
    return (
      <FooterWrapper>
        <h1>Footer</h1>
      </FooterWrapper>
    );
  }
}
const FooterWrapper = styled.section`
  background-image: url(${Free});
  height: 75vh;
  background-size: cover;
  position: relative;
`;
export default Footer;
