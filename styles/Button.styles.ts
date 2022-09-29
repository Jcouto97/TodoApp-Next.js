import styled from "styled-components";

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
  width: ${(props: React.CSSProperties) => props.width || "40%"};
  background: linear-gradient(94.99deg, #47e1bc -3.88%, #80e9a1 120.78%);
  background: "linear-gradient(94.99deg, #e7d1d5 -3.88%, #ea2eff 120.78%)";
  color: white;
  font-weight: 600;
  font-family: "Inria Serif", serif;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
