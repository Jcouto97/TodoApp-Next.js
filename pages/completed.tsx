import type { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { CompletedContext } from '../Contexts/CompletedContext'


const Completed: NextPage = () => {
    const { completed, setCompleted } = useContext(CompletedContext);
    
const handleClear = () =>{
    setCompleted(setCompleted([]));
}

  return (
    <>
         <div>
        {completed?.length > 0 ? (
          <p>
            Completed chores:{" "}
            {completed.map((chore: string, index: number) => {
              return <p key={index}>{chore}</p>;
            })}
          </p>
        ) : (
          <p>No completed items</p>
        )}
      </div>
      <button onClick={handleClear} >
        Click here to Clear Completed List
      </button>
      <Link href="/todopage">
        <button>Click here to go back to todo list page</button>
      </Link>
    </>
  );
};

export default Completed;
