import Link from "next/link";
import { memo, useState } from "react";
import { Container, Title, Time } from "../styles/Header.styles";
import check from "../assets/check.png";
import Image from "next/image";

const Header = () => {
  const [time, setTime] = useState<string>(new Date().toString());

  function displayTime() {
    setTime(new Date().toString());
  }

  setTimeout(() => {
    displayTime();
  }, 1000);

  return (
    <>
      <Link href="/">
        <Container>
          <Title>
            TOD
            <Image src={check} width={36} height={39} alt="check icon" /> &nbsp;
            LIST
          </Title>
          <Time>{time}</Time>
        </Container>
      </Link>
    </>
  );
};

export default memo(Header);
