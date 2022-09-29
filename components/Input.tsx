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
          //porque é que aqui n posso usar só e?
          handleSubmit(event);
        }
      }}
    />
  );
};

export default Input;
