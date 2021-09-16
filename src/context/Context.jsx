import React, { useState, useEffect } from "react";

const Context = React.createContext();
// const CITY = "https://www.metaweather.com/api/location/search/?query=";
const KEY = "1020d136f3483e995f625e7e32ac0b62";

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCity = async (city = "medellin") => {
    // setError(false);
    //setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric&lang=es`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setLoading(false);
      }
      // console.log(data);
      if (data.cod === "404") {
        setError(true);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      console.log("Yo soy el catch");
    }
  };

  useEffect(() => {
    getCity();
  }, []);
  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        getCity,
        weatherData,
        loading,
        error,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
