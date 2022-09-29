import type { NextPage } from "next";
import Link from "next/link";
import { memo, useContext, useState } from "react";
import { CompletedContext } from "../Contexts/CompletedContext";

const ToDoPage: NextPage = () => {
  const { completed, setCompleted } = useContext(CompletedContext);

  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

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

    //nulish concealing, se tiver vazio tem lenght a mesma
    setCompleted([
      ...(completed ?? []),
      chore + " completed at " + dateAndTime,
    ]);
  };

  return (
    <>
      <div>todo Page</div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyUp={(key) => {
          if (key.code === "Enter") {
            handleSubmit(event);
          }
        }}
      />
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

      <Link href="/completed">
        <button>Click here to go to completed page</button>
      </Link>
    </>
  );
};

export default memo(ToDoPage);
