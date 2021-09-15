import React from "react";
import { ButtonSearch, Close, InputSearch, NavMenu } from "./styled";
const Nav = ({ open, onClick }) => {
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <NavMenu open={open}>
      <Close onClick={() => onClick(!open)}>X</Close>
      <form onSubmit={submit}>
        <InputSearch type="text" placeholder="Search location" />
        <ButtonSearch>Search</ButtonSearch>
      </form>
    </NavMenu>
  );
};

export default Nav;
