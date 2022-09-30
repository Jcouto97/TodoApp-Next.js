import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(94.99deg, #1fbba5 -3.88%, #80e9a1 120.78%);
  background: "linear-gradient(94.99deg, #e7d1d5 -3.88%, #ea2eff 120.78%)";
  cursor: pointer;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Inria Serif", serif;
  border-bottom: #1fbba5 2px solid;
`;

export const Title = styled.h1`
  font-size: 40px;
  display: flex;
  align-items: center;
  color: white;
`;

export const Time = styled.p`
  color: white;
  border: 2px solid white;
  border-radius: 20px;
  padding: 7px;
  margin-bottom: 12px;
  font-size: 13px;
`;
