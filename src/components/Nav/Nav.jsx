import React, { useState, useContext } from "react";
import { ButtonSearch, Close, InputSearch, NavMenu } from "./styled";
import { Context } from "../../context/Context";

const Nav = () => {
  const { open, setOpen, getCity } = useContext(Context);
  const [placeHolder, setPlaceholder] = useState("Search location");

  const submit = (e) => {
    e.preventDefault();
    if (!e.target[0].value) {
      return setPlaceholder("Nothing to geocode");
    }
    getCity(e.target[0].value);
    setOpen((e) => !e);
    e.target[0].value = "";
    setPlaceholder("Search location");
  };

  return (
    <NavMenu open={open}>
      <Close onClick={() => setOpen((e) => !e)}>X</Close>
      <form onSubmit={submit}>
        <InputSearch type="text" placeholder={placeHolder} />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </form>
    </NavMenu>
  );
};

export default Nav;
