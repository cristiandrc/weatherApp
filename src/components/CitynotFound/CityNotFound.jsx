import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Container, Text, Button, Span } from "./styled";

const NotCity = () => {
  const { city, getCity } = useContext(Context);
  return (
    <Container>
      <Text>Lo sentimos no conseguimos datos de la ciudad </Text>
      <Span>{city}</Span>
      <Button onClick={() => getCity()}>Cerrar</Button>
    </Container>
  );
};

export default NotCity;
