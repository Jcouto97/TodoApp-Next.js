import type { NextPage } from "next";
import Link from "next/link";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <>
      <div>home</div>
      <Link href='/todopage'>
        <button>
          Click here to go to todo list page
        </button>
      </Link>
    </>
  );
};

export default memo(Home);
