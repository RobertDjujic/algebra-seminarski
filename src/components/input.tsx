import { InputHTMLAttributes } from "react";
import Button from "./button";

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="input">
      <input className="input__text" {...props} />
      <Button text="Send" />
    </div>
  );
};

export default Input;
