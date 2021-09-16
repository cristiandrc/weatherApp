import styled from "styled-components";

export const NavMenu = styled.nav`
  position: fixed;
  background-color: #1e213a;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: ${({ open }) => (open === true ? "0" : "-100vw")};
  bottom: 0;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  transition: 0.5s left ease;
  @media (min-width: 1269px) {
    position: absolute;
    max-width: 459px;
  }
`;

export const InputSearch = styled.input`
  width: 252px;
  height: 48px;
  padding-left: 48px;
  outline: none;
  background-color: transparent;
  border: 1px solid #e7e7eb;
  font-size: 16px;
  font-weight: 500;
  color: #e7e7eb;
`;

export const ButtonSearch = styled.button`
  width: 86px;
  height: 48px;
  background-color: #3c47e9;
  margin-left: 12px;
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: 600;
`;
