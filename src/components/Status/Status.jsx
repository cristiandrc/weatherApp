import React from "react";
import { Container, Measure, Title, Value } from "./styled";
const Status = ({ title, measure, value, height }) => {
  return (
    <Container height={height}>
      <Title>{title}</Title>
      <span>
        <Value>{value}</Value>
        <Measure>{measure}</Measure>
      </span>
    </Container>
  );
};

export default Status;
