import type { NextPage } from "next";
import Link from "next/link";
import { memo, useContext, useState } from "react";
import { CompletedContext } from "../Contexts/CompletedContext";
import { TodoContext } from "../Contexts/TodoContext";
import Input from "../components/Input";
import Chore from "../components/Chore";
import { Button } from "../styles/Button.styles";
import { Container, Title, ListContainer, Subtitle } from "../styles/ChoresPages";

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
    <Container>
      <Title>todo Page</Title>
      <Input
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ListContainer>
        {todoList.length >= 1 ? (
          todoList.map((chore: string, index: number) => {
            return (
              <Chore
                key={index}
                chore={chore}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
              />
            );
          })
        ) : (
          <Subtitle>Enter a chore on your todo list :)</Subtitle>
        )}
      </ListContainer>
      {completed.length > 0 ? (
        <Link href="/completed">
          <Button width={'10%'} >Completed Chores Page</Button>
        </Link>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default memo(ToDoPage);
