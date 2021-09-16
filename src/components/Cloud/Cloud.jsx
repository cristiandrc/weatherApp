import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";

const ContainerImg = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloudImg = styled.img`
  width: 250px;
  object-fit: cover;
`;

const Cloud = () => {
  const [cloud, setCloud] = useState(
    "https://openweathermap.org/img/wn/01d@4x.png"
  );
  const { weatherData } = useContext(Context);

  useEffect(() => {
    setCloud(
      `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    );
  }, []);

  return (
    <ContainerImg>
      <CloudImg src={cloud} alt="Cloud" />
    </ContainerImg>
  );
};

export default Cloud;
