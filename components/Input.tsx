import { IinputProps } from "../types";

const Input = (props: IinputProps) => {
const{input, handleChange, handleSubmit} = props

  return (
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
  );
};

export default Input;
