import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";

const ContainerImg = styled.div`
  width: ${({ size }) => (size ? "100px" : "150px")};
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloudImg = styled.img`
  width: ${({ size }) => (size ? "100px" : "250px")};
  object-fit: cover;
`;

const Cloud = ({ size, icon }) => {
  const { weatherData } = useContext(Context);
  const [cloud, setCloud] = useState(
    `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
  );

  useEffect(() => {
    setCloud(
      `https://openweathermap.org/img/wn/${
        icon ? icon : weatherData.weather[0].icon
      }@4x.png`
    );
  }, [weatherData.weather[0].icon, icon]);

  return (
    <ContainerImg size={size}>
      <CloudImg size={size} src={cloud} alt="Cloud" />
    </ContainerImg>
  );
};

export default Cloud;
