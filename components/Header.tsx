import type { NextPage } from "next";
import Link from "next/link";
import { memo, useState } from "react";
import { Container } from "../styles/Header.styles";

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
          <h1>TODO LIST</h1>
          <p>{time}</p>
        </Container>
      </Link>
    </>
  );
};

export default memo(Header);
