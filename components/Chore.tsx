import { IChoreProps } from "../types";
import trash from "./../assets/trash.png";
import circle from "./../assets/circle.png";
import Image from "next/image";
import { ChoreContainer, Number, ChoreText, ImageContainer } from "../styles/Chore.styles";
import { memo } from "react";

const Chore = (props: IChoreProps) => {
  const { chore, handleDelete, handleCompleted } = props;

  return (
    <ChoreContainer>
      <ImageContainer>
        <Image
          width={20}
          height={20}
          src={circle}
          onClick={(e) => {
            e.preventDefault();
            handleCompleted(chore);
          }}
          alt="circle"
        />
      </ImageContainer>
      <Number>
        <ChoreText>{chore}</ChoreText>
        <ImageContainer>
          <Image
            width={20}
            height={20}
            src={trash}
            onClick={(e) => {
              e.preventDefault();
              handleDelete(chore);
            }}
            alt="trash"
          />
        </ImageContainer>
      </Number>
    </ChoreContainer>
  );
};

export default memo(Chore);
