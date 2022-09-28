import type { NextPage } from "next";
import Link from "next/link";

const Completed: NextPage = () => {
  return (
    <>
      <div>Completed Page</div>
      <Link href="/todopage">
        <button>Click here to go back to todo list page</button>
      </Link>
    </>
  );
};

export default Completed;
