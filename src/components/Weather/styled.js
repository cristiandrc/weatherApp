import styled from "styled-components";

export const Container = styled.div`
  width: 120px;
  height: 177px;
  /* margin: 25px 20px; */
  padding: 15px 0;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Cloud = styled.img`
  width: 55px;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
  padding: 50px 25px;
  gap: 30px;
`;
