import { IinputProps } from "../types";
import { UserInput } from "../styles/Input.styles";
import { memo } from "react";

const Input = (props: IinputProps) => {
  const { input, handleChange, handleSubmit } = props;

  return (
    <UserInput
      type="text"
      value={input}
      onChange={handleChange}
      placeholder= 'Your new task here'
      onKeyUp={(key) => {
        if (key.code === "Enter") {
          //porque é que aqui n posso usar só e?
          handleSubmit(event);
        }
      }}
    />
  );
};

export default memo(Input);
