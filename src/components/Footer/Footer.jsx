import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  margin-top: 40px;
`;
const A = styled.a`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: #e7e7eb;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <A href="https://cristiandrc.dev" target="_blank">
        Cristian Rojas
      </A>{" "}
      <A href="https://devChallenges.io" target="_blank">
        devChallenges.io
      </A>{" "}
      <A href="https://openweathermap.org" target="_blank">
        openweathermap.org
      </A>
    </FooterContainer>
  );
};

export default Footer;
