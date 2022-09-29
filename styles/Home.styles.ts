import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5%;
  margin-right: 4%;
`;

export const TextContainer = styled.div`
  background-color: #f0fffb;
  border: 1px solid #44c9ab;
  padding: 2%;
  color: #5c605f;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 10%;
`;

export const ImageContainer = styled.div`
    margin-bottom: 10%;
    border-bottom: 1px solid #21ab8c;
`

export const Title = styled.h1`
  font-size: 40px;
  font-family: "Inria Serif", serif;
  color: #616766;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-family: "Inria Serif", serif;
  font-weight: 600;
`;

export const Perks = styled.div`
  font-family: "Inria Serif", serif;
  font-size: 15px;
`;

export const Perk = styled.p``;

export const MiniFooter = styled.div`
  display: flex;
  gap: 12px;
`;

export const IndividualMiniFooter = styled.p`
  border-bottom: 1px solid #44c9ab;
  font-family: "Inria Serif", serif;
`;

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid #21ab8c;
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
  margin-top: 6%;
  margin-left: 28%;
  width: 40%;
  background: linear-gradient(94.99deg, #47e1bc -3.88%, #80e9a1 120.78%);
  background: "linear-gradient(94.99deg, #e7d1d5 -3.88%, #ea2eff 120.78%)";
  color: #1b6655;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
