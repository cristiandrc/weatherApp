import React, { useState, useEffect } from "react";

const Context = React.createContext();
const CITY = "https://api.openweathermap.org/data/2.5/weather?";
const KEY = "1020d136f3483e995f625e7e32ac0b62";
const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");
  const [loadingCity, setLoadingCity] = useState(true);

  const getLocation = (callBack) => {
    const geo_option = {
      timeout: 2000,
    };
    const geoSuccess = ({ coords }) => {
      const location = `lat=${coords.latitude}&lon=${coords.longitude}`;
      // console.log(coords);
      // console.log(location);
      callBack(null, location);
    };

    const geoError = (e) => {
      // console.log(e);
      callBack();
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        geoSuccess,
        geoError,
        geo_option
      );
    } else {
      console.log("no tenemos geo");
      callBack();
    }
  };

  const getCity = async (place = "medellin", location) => {
    let city = `q=${place}`;
    getDays(city, location);
    setLoadingCity(true);
    setCity(city);

    try {
      const response = await fetch(
        `${CITY}${location ? location : city}&appid=${KEY}&units=metric&lang=es`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setError(false);
        setWeatherData(data);
        setLoading(false);
        setLoadingCity(false);
      }
      if (data.cod === "404") {
        setError(true);
        setLoading(false);
        setLoadingCity(false);
      }
    } catch (err) {
      setError(err);
      console.log("Yo soy el catch");
    }
  };

  const getDays = async (city = "medellin", location) => {
    let numberDay = [];
    let forecast = [];
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?${
        location ? location : city
      }&appid=${KEY}&units=metric&lang=es`
    );
    const data = await response.json();

    data.list //tomar los dias y unificar los repetidos
      .map((e) => e.dt_txt.slice(8, 10))
      .forEach(
        (element) => !numberDay.includes(element) && numberDay.push(element)
      );
    //para eliminar el dia actual y solo tener los siguientes dias
    numberDay.length > 5 && numberDay.shift();

    numberDay.forEach((element) => {
      let filter = data.list.filter((e) => e.dt_txt.slice(8, 10) === element);

      forecast.push(filter);
    });
    setForecastData(forecast);
  };

  useEffect(() => {
    getLocation(getCity);
  }, []);

  return (
    <Context.Provider
      value={{
        open,
        city,
        setOpen,
        getCity,
        weatherData,
        forecastData,
        loading,
        error,
        loadingCity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
