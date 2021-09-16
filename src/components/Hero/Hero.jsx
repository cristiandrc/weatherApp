import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
  Section,
  CloudsBg,
  Temp,
  Climate,
  Today,
  City,
  Search,
} from "./styled";
import cloudBackground from "../../assets/images/Cloud-background.png";
import Nav from "../Nav/Nav";
import Cloud from "../Cloud/Cloud";

const Hero = () => {
  const { setOpen, weatherData } = useContext(Context);

  // console.log(weatherData);

  return (
    <Section>
      <CloudsBg src={cloudBackground} />
      <Search onClick={() => setOpen((e) => !e)}>Search for places</Search>
      <Cloud />
      <Temp>
        {weatherData.main.temp.toFixed()}
        {/* 22 */}
        <span>°C</span>
      </Temp>
      <Climate>{weatherData.weather[0].description}</Climate>
      <Today>
        Today <span>.</span> {Date().substr(0, 10)}
      </Today>
      <City>
        {weatherData.name}, {weatherData.sys.country}
      </City>
      <Nav />
    </Section>
  );
};

export default Hero;
