import React from "react";
import { Primary, Label } from "./ButtonPrimary.styles";
import { ButtonProps } from "../../../types/main";

const ButtonPrimary: React.FC<ButtonProps> = ({
  title,
  additionalStyles,
  onPress,
}) => (
  <Primary style={{ ...additionalStyles }} onPress={onPress}>
    <Label>{title}</Label>
  </Primary>
);

export default ButtonPrimary;
