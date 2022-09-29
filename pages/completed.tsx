import type { NextPage } from "next";
import Link from "next/link";
import { memo, useContext } from "react";
import { CompletedContext } from "../Contexts/CompletedContext";
import { Button } from "../styles/Button.styles";
import {
  Container,
  Title,
  Subtitle,
  ListContainer,
  GoBack,
  BackText,
} from "../styles/ChoresPages";
import Image from "next/image";
import leftArrow from "./../assets/left-arrow.png";

const Completed: NextPage = () => {
  const { completed, setCompleted } = useContext(CompletedContext);

  const handleClear = () => {
    setCompleted(setCompleted([]));
  };

  return (
    <Container>
      {completed?.length > 0 ? (
        <ListContainer>
          <Title>Completed chores</Title>
          {completed.map((chore: string, index: number) => {
            return <p key={index}>{chore}</p>;
          })}
          <Button onClick={handleClear} width={'2'} margin={'0px 20px'} >
            Click here to Clear Completed List
          </Button>
        </ListContainer>
      ) : (
        <Subtitle>No Completed Chores</Subtitle>
      )}
      <GoBack>
        <Link href="/todopage">
          <Image src={leftArrow} alt="left-arrow" width={30} height={25}/>
        </Link>
        <BackText>Go Back To List</BackText>
      </GoBack>
    </Container>
  );
};

export default memo(Completed);
