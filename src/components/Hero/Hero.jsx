import React, { useState } from "react";
import {
  Section,
  CloudsBg,
  Cloud,
  Temp,
  Climate,
  Today,
  City,
  Search,
} from "./styled";
import Nav from "../Nav/Nav";
import cloudBackground from "../../assets/images/Cloud-background.png";
import shower from "../../assets/images/Shower.png";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <CloudsBg src={cloudBackground} />
      <Search onClick={() => setOpen((e) => !e)}>Search for places</Search>
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
      <Nav open={open} onClick={setOpen} />
    </Section>
  );
};

export default Hero;
