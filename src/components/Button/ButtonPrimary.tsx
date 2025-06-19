import React from "react";
import Button, { ButtonProps } from "./Button";



export interface ButtonPrimaryProps extends ButtonProps {
  href?: string;
  textClassName?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  textClassName = "",
  ...args
}) => {
  return (
    <Button
      className={`disabled:bg-opacity/70 rounded-full bg-primary ${
        textClassName || "text-white"
      } hover:bg-primary/80 hover:text-white ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
