import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #44c9ab;
  margin: 4% 33%;
  background-color: #f0fffb;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.h1`
  font-size: 40px;
  font-family: "Inria Serif", serif;
  color: #616766;
  border-bottom: 1px solid #44c9ab;
`;

export const ListContainer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  font-family: "Inria Serif", serif;
  color: #616766;
  border: 1px solid #44c9ab;
  background-color: white;
  padding: 7px;
  border-radius: 20px;
  margin-right: 20px;
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const BackText = styled.p`
  font-size: 20px;
  font-family: "Inria Serif", serif;
  color: #616766;
`;
