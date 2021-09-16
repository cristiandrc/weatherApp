import React, { useContext } from "react";
import { Context } from "../context/Context";
import Hero from "../components/Hero/Hero";
// import Weather from "../components/Weather/Weather";
// import { WeatherContainer } from "../components/Weather/styled";
import Status from "../components/Status/Status";
import Modal from "../components/Modal/Modal";
import { StatusContainer } from "../components/Status/styled";
import { StatusTitle } from "../components/Status/styled";

const Home = () => {
  const { weatherData, error, loading } = useContext(Context);

  if (loading) {
    return <h2>Cargando datos...Home</h2>;
  }
  // if (error) {
  //   return <h2>No logramdo conseguir los datos </h2>;
  // }

  return (
    <>
      {error && <Modal>No tenemos datos</Modal>}
      <Hero />
      <StatusTitle>Today’s Highlights </StatusTitle>
      <StatusContainer>
        <Status
          title="Wind status"
          measure="mps"
          value={weatherData.wind.speed}
        />
        <Status
          title="Humidity"
          measure="%"
          value={weatherData.main.humidity}
        />
        <Status
          title="Visibility"
          measure="Km"
          value={(weatherData.visibility / 1000).toFixed(1)}
        />
        <Status
          title="Air Pressure"
          measure="hpa"
          value={weatherData.main.pressure}
        />
      </StatusContainer>
    </>
  );
};

export default Home;
