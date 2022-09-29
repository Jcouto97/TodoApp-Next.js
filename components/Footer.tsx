import type { NextPage } from "next";
import { memo } from "react";
import { Container, Text } from "../styles/Footer.styles";

const Footer: NextPage = () => {
  return (
    <Container>
      <Text>© TodoApp 2022</Text>
    </Container>
  );
};

export default memo(Footer);
