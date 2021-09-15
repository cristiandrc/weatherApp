import React from "react";
import { Section, CloudsBg, Cloud, Temp, Climate, Today, City } from "./styled";
import cloudBackground from "../../assets/images/Cloud-background.png";
import shower from "../../assets/images/Shower.png";

const Hero = () => {
  return (
    <Section>
      <CloudsBg src={cloudBackground} />
      <Cloud src={shower} />
      <Temp>
        15<span>°C</span>
      </Temp>
      <Climate>Shower</Climate>
      <Today>
        Today <span>.</span> Fri,5 jun
      </Today>
      <City>
        <span>X</span> Helsinki
      </City>
    </Section>
  );
};

export default Hero;