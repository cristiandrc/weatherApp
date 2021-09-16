import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e213a73;
  color: #e7e7eb;
`;

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalContainer>{children}</ModalContainer>,
    document.getElementById("modal")
  );
};

export default Modal;
