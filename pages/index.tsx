import type { NextPage } from "next";
import Link from "next/link";
import { memo } from "react";
import Image from "next/image";
import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  Perks,
  Perk,
  MiniFooter,
  IndividualMiniFooter,
  ImageContainer,
} from "../styles/Home.styles";
import robot from "../assets/home.png";
import vector from "../assets/vector.png";
import { Button } from "../styles/Button.styles";

const Home: NextPage = () => {
  return (
    <Container>
      <TextContainer>
        <Title>TODO</Title>
        <Subtitle>A to-do list web app</Subtitle>

        <Perks>
          <Perk>
            <Image src={vector} width={15} height={15} alt="vector icon" />
            &nbsp; manage projects
          </Perk>
          <Perk>
            <Image src={vector} width={15} height={15} alt="vector icon" />
            &nbsp; add tasks
          </Perk>
        </Perks>
        <MiniFooter>
          <IndividualMiniFooter>a next.js project</IndividualMiniFooter>
          <IndividualMiniFooter>by João Couto</IndividualMiniFooter>
        </MiniFooter>
        <Link href="/todopage">
          <Button>Start Here</Button>
        </Link>
      </TextContainer>
      <ImageContainer>
        <Image src={robot} width={550} height={350} alt="home robot" />
      </ImageContainer>
    </Container>
  );
};

export default memo(Home);
