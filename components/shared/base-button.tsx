import { Button, ButtonProps } from "antd";
import { ButtonType } from "antd/es/button";
import React from "react";

interface Props extends ButtonProps {
  children?: React.ReactNode;
  //   type:  ...ButtonType
}

const customTypeButton = {
  secondary: "secondary-btn",
};
const BaseButton = ({ ...props }: Props) => {
  return (
    <Button
      {...props}
      className={` opacity-95 border-none shadow-none ${props.type} ${props.className}`}
    >
      {props.children}
    </Button>
  );
};

export default BaseButton;
