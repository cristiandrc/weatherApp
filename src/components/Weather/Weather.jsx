import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import Cloud from "../Cloud/Cloud";

const Weather = ({ data }) => {
  const imgNum = {};
  const [idImg, setIdImg] = useState(0);

  const tempMin = data
    .map((item) => item.main.temp)
    .reduce((acc, item) => Math.min(acc, item))
    .toFixed();

  const tempMax = data
    .map((item) => item.main.temp)
    .reduce((acc, item) => Math.max(acc, item))
    .toFixed();

  const getId = () => {
    let id = 0;
    data
      .map((e) => e.weather[0].icon.slice(0, 2))
      .forEach((element) => {
        if (imgNum[element] === undefined) {
          imgNum[element] = 1;
        } else {
          imgNum[element] = ++imgNum[element];
        }
      });

    Object.entries(imgNum).map((e) => {
      if (!e[1] >= id) {
        setIdImg(e[0]);
        id = e[1];
      }
    });
  };

  useEffect(() => {
    getId();
  });

  return (
    <Container>
      <p>{data[0].dt_txt.slice(0, 10)}</p>
      <Cloud size="true" icon={`${idImg}d`} />
      <p>
        <span>{tempMin}°C</span> | <span>{tempMax}°C</span>
      </p>
    </Container>
  );
};

export default Weather;
