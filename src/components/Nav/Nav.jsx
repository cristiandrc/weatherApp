import React, { useContext } from "react";
import { ButtonSearch, Close, InputSearch, NavMenu } from "./styled";
import { Context } from "../../context/Context";

const Nav = () => {
  const { open, setOpen, getCity } = useContext(Context);

  const submit = (e) => {
    e.preventDefault();
    getCity(e.target[0].value);
    setOpen((e) => !e);
  };

  return (
    <NavMenu open={open}>
      <Close onClick={() => setOpen((e) => !e)}>X</Close>
      <form onSubmit={submit}>
        <InputSearch type="text" placeholder="Search location" />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </form>
    </NavMenu>
  );
};

export default Nav;
