import type { NextPage } from "next";
import Link from "next/link";
import { memo, useContext, useState } from "react";
import { CompletedContext } from "../Contexts/CompletedContext";
import { TodoContext } from "../Contexts/TodoContext";
import Input from "../components/Input";

const ToDoPage: NextPage = () => {
  const { completed, setCompleted } = useContext(CompletedContext);
  const { todoList, setTodoList } = useContext(TodoContext);

  const [input, setInput] = useState<string>("");

  const handleChange = (e: any) => {
    //debugger;
    e.preventDefault();

    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const dateAndTime: string =
      new Date().toDateString() + " at " + new Date().toLocaleTimeString();

    //input + date para dar bind da date a cada chore
    setTodoList([...todoList, input + " submitted on " + dateAndTime]);

    //para dar reset ao input
    setInput("");
  };

  const handleDelete = (chore: string) => {
    const updatedList = todoList.filter(
      (todo: string) => todoList.indexOf(todo) != todoList.indexOf(chore)
    );
    setTodoList(updatedList);
  };

  const handleCompleted = (chore: string) => {
    const updatedList = todoList.filter(
      (todo: string) => todoList.indexOf(todo) != todoList.indexOf(chore)
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
      <Input input={input} setInput={setInput} handleChange= {handleChange} handleSubmit= {handleSubmit}/>
      <ol>
        {todoList.length >= 1
          ? todoList.map((chore: string, index: number) => {
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
