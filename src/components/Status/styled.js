import styled from "styled-components";

export const Container = styled.div`
  width: 328px;
  height: ${({ height }) => (!height ? "159px" : "240px")};
  margin: 20px auto;
  background-color: #1e213a;
  color: #e7e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;

export const Value = styled.span`
  font-size: 65px;
  font-weight: 700;
`;

export const Measure = styled.span`
  font-size: 30px;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 810px;
  margin: 0 auto;
`;
