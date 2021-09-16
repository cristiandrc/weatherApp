import React from "react";
import Hero from "../components/Hero/Hero";
import Weather from "../components/Weather/Weather";
import { WeatherContainer } from "../components/Weather/styled";
import Status from "../components/Status/Status";
import { StatusContainer } from "../components/Status/styled";

const Home = () => {
  return (
    <>
      <Hero />
      <WeatherContainer>
        {new Array(5).fill(1).map((d, i) => (
          <Weather key={i} />
        ))}
      </WeatherContainer>
      <h2>Today’s Highlights </h2>
      <StatusContainer>
        <Status title="Wind status" measure="mph" value="7" />
        <Status title="Humidity" measure="%" value="7" />
        <Status title="Visibility" measure="miles" value="7" />
        <Status title="Air Pressure" measure="mb" value="7" />
      </StatusContainer>
    </>
  );
};

export default Home;
