import type { NextPage } from "next";
import Link from "next/link";
import { memo } from "react";
import { Container } from "../styles/Header.styles";

const Header: NextPage = () => {
  return (
  <Link href='/'>
  <Container>TODO LIST, hora local</Container> 
  </Link>
  )
};

export default memo(Header);
