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
  Button,
  IndividualMiniFooter,
} from "../styles/Home.styles";
import robot from "../assets/home.png";
import vector from "../assets/vector.png";

const Home: NextPage = () => {
  return (
    <Container>
      <Image src={robot} width={450} height={450} alt="home robot" />
      <TextContainer>
        <Title>TODO</Title>
        <Subtitle>A to-do list web app</Subtitle>

        <Perks>
          <Perk>
            <Image src={vector} width={10} height={10} alt="vector icon" />
            manage projects
          </Perk>
          <Perk>
            <Image src={vector} width={10} height={10} alt="vector icon" />
            add tasks
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
    </Container>
  );
};

export default memo(Home);
