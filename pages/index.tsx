import type { NextPage } from "next";
import Link from "next/link";

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

export default Home;
