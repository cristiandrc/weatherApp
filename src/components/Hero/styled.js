import styled from "styled-components";

export const Section = styled.section`
  background-color: #1e213a;
  position: relative;
  min-height: 100vh;
  color: #e7e7eb;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1269px) {
    width: 459px;
    height: 100vh;
    max-height: 800px;
    min-height: initial;
  }
`;

export const CloudsBg = styled.img`
  position: absolute;
  width: 150%;
  /* left: -25%; */
  top: 50px;
  opacity: 0.1;
`;

export const Temp = styled.span`
  font-size: 130px;
  font-weight: 500;
  span {
    font-size: 50px;
  }
`;

export const Climate = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: #a09fb1;
  margin: 20px 0 30px;
`;

export const Today = styled.p`
  color: #88869d;
  margin-bottom: 20px;
  position: relative;
  span {
    background-color: #88869d;
  }
`;

export const City = styled.p`
  color: #88869d;
  font-size: 18px;
  font-weight: 600;
  display: flex;
`;

export const Search = styled.button`
  width: 161px;
  height: 40px;
  position: absolute;
  top: 18px;
  left: 11px;
  background-color: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  cursor: pointer;
`;
