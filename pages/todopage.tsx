import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const ToDoPage: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]); //DAR CLEAR

  const handleChange = (e: any) => {
    //debugger;
    e.preventDefault();

    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const dateAndTime = new Date().toString();

    //input + date para dar bind da date a cada chore
    setTodoList([...todoList, input + " submitted at " + dateAndTime]);

    //para dar reset ao input
    setInput("");
  };

  const handleDelete = (chore: string) => {
    const updatedList = todoList.filter(
      (todo) => todoList.indexOf(todo) != todoList.indexOf(chore)
    );
    setTodoList(updatedList);
  };

  const handleCompleted = (chore: string) => {
    const updatedList = todoList.filter(
      (todo) => todoList.indexOf(todo) != todoList.indexOf(chore)
    );
    setTodoList(updatedList);
    const dateAndTime = new Date().toString();
    setCompleted([...completed, chore + " completed at " + dateAndTime]);
  };

  return (
    <>
      <div>todo Page</div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ol>
        {todoList.length >= 1
          ? todoList.map((chore, index) => {
              return (
                <li key={index}>
                  {chore}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(chore);
                    }}
                  >
                    delete
                  </button>{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleCompleted(chore);
                    }}
                  >
                    completed
                  </button>
                </li>
              );
            })
          : "Enter a chore on your todo list :)"}
      </ol>
      <div>
        {completed.length > 0 ? (
          <p>
            Completed chores:{" "}
            {completed.map((chore, index) => {
              return <p key={index}>{chore}</p>;
            })}
          </p>
        ) : (
          <></>
        )}
      </div>

      <Link href="/completed">
        <button>Click here to go to completed page</button>
      </Link>
    </>
  );
};

export default ToDoPage;
