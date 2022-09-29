import { IChoreProps } from "../types";

const Chore = (props: IChoreProps) => {
  const { chore, handleDelete, handleCompleted } = props;

  return (
    <li>
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
};

export default Chore;
