import React from "react";
import Hero from "../components/Hero/Hero";
import Weather from "../components/Weather/Weather";
import { WeatherContainer } from "../components/Weather/styled";

const Home = () => {
  return (
    <>
      <Hero />
      <WeatherContainer>
        {new Array(5).fill(1).map((d, i) => (
          <Weather key={i} />
        ))}
      </WeatherContainer>
    </>
  );
};

export default Home;
