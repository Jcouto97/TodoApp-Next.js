import styled from "styled-components";

export const ChoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid #44c9ab;
  gap: 1%;
  background-color: white;
  border-radius: 20px;
  min-width: 500px;
  max-width: 500px;
  font-family: "Inria Serif", serif;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const Number = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ChoreText = styled.p`
font-weight: bold;

`;

export const ImageContainer = styled.div`
cursor: pointer;
`