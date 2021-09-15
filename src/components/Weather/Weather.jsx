import React from "react";
import shower from "../../assets/images/Shower.png";
import { Container, Cloud } from "./styled";
const Weather = () => {
  return (
    <Container>
      <p>Tomorrow</p>
      <Cloud src={shower} alt="" />
      <p>
        <span>16°C</span> <span>11°C</span>
      </p>
    </Container>
  );
};

export default Weather;
