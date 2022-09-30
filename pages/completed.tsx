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
import { ChoreText, ChoreContainer } from "../styles/Chore.styles";
import Image from "next/image";
import leftArrow from "./../assets/left-arrow.png";
import checkCircle from "./../assets/checkCircle.png";

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
            return (
              <ChoreContainer key={index}>
                <ChoreText>
                  <Image
                    width={15}
                    height={15}
                    src={checkCircle}
                    alt="check circle"
                  />{" "}
                  &nbsp;
                  {chore}
                </ChoreText>
              </ChoreContainer>
            );
          })}
          <Button onClick={handleClear} width={"2"} margin={"0px 20px"}>
            Click here to Clear Completed List
          </Button>
        </ListContainer>
      ) : (
        <Subtitle>No Completed Chores</Subtitle>
      )}
      <GoBack>
        <Link href="/todopage">
          <Image src={leftArrow} alt="left-arrow" width={30} height={25} />
        </Link>
        <BackText>Go Back To List</BackText>
      </GoBack>
    </Container>
  );
};

export default memo(Completed);
