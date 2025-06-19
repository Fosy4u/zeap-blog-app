import React from "react";
import Button, { ButtonProps } from "./Button";

export interface ButtonSecondaryProps extends ButtonProps {
  href?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = "bg-secondary",
  ...args
}) => {
  return (
    <Button
      className={`text-primary hover:bg-midGold hover:text-black ${className}`}
      {...args}
    />
  );
};

export default ButtonSecondary;
