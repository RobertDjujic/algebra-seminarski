import { InputHTMLAttributes } from "react";
import Button from "./button";

type InputProps = {
  handleSend: (message: string) => void;
  inputValue: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ inputValue, handleSend, ...props }: InputProps) => {
  const handleClick = () => {
    console.log("Button clicked");
    handleSend(inputValue);
  };
  return (
    <div className="input">
      <input className="input__text" {...props} />
      <Button onClick={() => handleClick()} text="Send" />
    </div>
  );
};

export default Input;
