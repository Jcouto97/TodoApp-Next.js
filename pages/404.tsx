import type { NextPage } from "next";
import { memo } from "react";
import Image from "next/image";
import dog from "../assets/dog.jpg";
import { Container, ImageContainer, Title } from "../styles/404.styles";

const PageNotFound: NextPage = () => {
  return (
    <Container>
      <Title>Page Not Found :(</Title>
      <ImageContainer>
        <Image src={dog} alt="a dog" className="rounded-full" />
      </ImageContainer>
    </Container>
  );
};

export default memo(PageNotFound);
